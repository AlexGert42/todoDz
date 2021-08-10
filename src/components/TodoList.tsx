import React, {useCallback} from 'react';
import {AddItemForm, TaskType} from "./AddItemForm";
import {InputSpan} from "./InputSpan";
import List from '@material-ui/core/List';
import {
    Checkbox,
    ListItem,
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
import {taskType} from "../store/todolistReducer";

type PropsType = {
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
                                    }: PropsType) => {


    console.log('todoList')
    const dispatch = useDispatch()
    const onChengeTitleHendler = useCallback((text: string) => chengeTitle(id, text), [id])

    const addTask = useCallback((id: string, nameTask: string) => {
        const action = addTaskTodolistAction(id, nameTask)
        dispatch(action)
    }, [id])




    const removeTask = useCallback((id: string, idTask: string) => {
        const action = removeTaskTodolistAction(id, idTask)
        dispatch(action)
    }, [])






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

                    const chengeIsDone = useCallback((id: string, Taskid: string) => {
                        const action = chengeIsDoneTaskTodolistAction(id, Taskid)
                        dispatch(action)
                    }, [item.isDone])


                    const chengeTaskTitle = useCallback((id: string, Taskid: string, text: string) => {
                        const action = chengeTitleTaskTodolistAction(id, Taskid, text)
                        dispatch(action)
                    }, [item.title])

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

export type TaskPropsType = {
    id: string
    item: taskType
    removeTask: (id: string, tast: string) => void
    chengeTaskTitle: (id: string, task: string, text: string) => void
    chengeIsDone: (id: string, task: string) => void
}


export const Task = React.memo(({id, item, removeTask, chengeTaskTitle, chengeIsDone}: TaskPropsType) => {

    const onChengeTaskTitleHendler = (text: string) => {
        chengeTaskTitle(id, item.id, text)
    }

    return (
        <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>

            <Checkbox
                onChange={() => chengeIsDone(id, item.id)}
                checked={item.isDone}
                color="secondary"
            />

            <InputSpan text={item.title} onChengeTitleHendler={onChengeTaskTitleHendler}/>

            <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeTask(id, item.id)}
            >X</Button>

        </ListItem>
    )
})
