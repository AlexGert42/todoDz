import React, {useCallback} from 'react';
import {AddItemForm, TaskType} from "./AddItemForm";
import {InputSpan} from "./InputSpan";
import List from '@material-ui/core/List';
import {
    Button,
    Typography,
    Grid,
    Paper,
    ButtonGroup,
} from '@material-ui/core';
import {FilterValuesType} from "../store/createTodolistReducer";
import {
    addTaskTodolistAction,
    chengeIsDoneTaskTodolistAction,
    chengeTitleTaskTodolistAction,
    removeTaskTodolistAction
} from "../store/todolistAction";
import {useDispatch} from "react-redux";
import {Task} from "./Task";
import { TodoApi } from '../api/todoApi';

export type PropsTypeTodolist = {
    id: string
    title: string,
    tasks: Array<TaskType>,
    chengeFilter: (id: string, value: FilterValuesType,) => void
    filter: FilterValuesType
    chengeTitle: (id: string, text: string) => void
    removeTodoList: (id: string) => void
}


export const TodoList = React.memo(({
                                        title,
                                        tasks,
                                        filter,
                                        chengeFilter,
                                        id,
                                        chengeTitle,
                                        removeTodoList
                                    }: PropsTypeTodolist) => {


    const dispatch = useDispatch()
    const onChengeTitleHendler = (text: string) => chengeTitle(id, text)

    const addTask = useCallback((id: string, nameTask: string) => {
        const action = addTaskTodolistAction(id, nameTask)
        dispatch(action)
    }, [id])

    const removeTask = useCallback((id: string, idTask: string) => {
        const action = removeTaskTodolistAction(id, idTask)
        dispatch(action)
    }, [id])

    const chengeIsDone = useCallback((id: string, Taskid: string) => {
        const action = chengeIsDoneTaskTodolistAction(id, Taskid)
        dispatch(action)
    }, [])


    const chengeTaskTitle = (id: string, Taskid: string, text: string) => {
        const action = chengeTitleTaskTodolistAction(id, Taskid, text)
        dispatch(action)
    }


    TodoApi.getTodolist()




    let filterForTasks = tasks
    if (filterForTasks) {
        if (filter === 'active') {
            filterForTasks = tasks.filter((item: any) => !item.isDone)
        }
        if (filter === 'complete') {
            filterForTasks = tasks.filter((item: any) => item.isDone)
        }
    }


    return (
        <Grid item spacing={5}>
            <Paper elevation={3} style={{padding: '20px'}}>

                <Typography variant="h3"
                            style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>

                    <InputSpan
                        text={title}
                        onChengeTitleHendler={onChengeTitleHendler}
                    />
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => removeTodoList(id)}
                    >remove</Button>

                </Typography>

                <AddItemForm addTask={addTask} id={id}/>

                {!filterForTasks ? null : filterForTasks.map(item => {



                    return <List key={item.id}>

                        <Task
                            id={id}
                            item={item}
                            removeTask={removeTask}
                            chengeTaskTitle={chengeTaskTitle}
                            chengeIsDone={chengeIsDone}
                        />
                    </List>
                })}

                <ButtonGroup
                    variant="text"
                    style={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '30px 0 0 0'
                        }
                    }>
                    <Button color={filter === 'all' ? 'secondary' : 'primary'}
                            onClick={() => chengeFilter(id, 'all')}>All
                    </Button>
                    <Button color={filter === 'active' ? 'secondary' : 'primary'}
                            onClick={() => chengeFilter(id, 'active')}>Active
                    </Button>
                    <Button color={filter === 'complete' ? 'secondary' : 'primary'}
                            onClick={() => chengeFilter(id, 'complete')}>Completed
                    </Button>
                </ButtonGroup>


            </Paper>
        </Grid>
    )
})

