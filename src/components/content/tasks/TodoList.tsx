import React, {useCallback, useEffect} from 'react';
import {AddItemForm} from "../form/AddItemForm";
import {InputSpan} from "../input/InputSpan";
import List from '@material-ui/core/List';
import {
    Button,
    Typography,
    Grid,
    Paper,
    ButtonGroup,
} from '@material-ui/core';
import {FilterValuesType} from "../../../store/todolist/createTodolistReducer";
import {
    addTaskThunk,
    getTaskThunk, removeTaskThunk,
    updateTaskThunk
} from "../../../store/tasks/todolistAction";
import {useDispatch} from "react-redux";
import {Task} from "./task/Task";
import {TaskType} from '../../../store/tasks/todolistReducer';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


export type PropsTypeTodolist = {
    id: string
    title: string,
    entiryStatus: string
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
                                        removeTodoList,
                                        entiryStatus
                                    }: PropsTypeTodolist) => {

    useEffect(() => {
        dispatch(getTaskThunk(id))
    }, [id])

    const dispatch = useDispatch()
    const onChengeTitleHendler = (text: string) => chengeTitle(id, text)

    const addTask = useCallback((nameTask: string) => {
        dispatch(addTaskThunk(id, nameTask))
    }, [id])

    const removeTask = useCallback((id: string, idTask: string) => {
        dispatch(removeTaskThunk(id, idTask))
    }, [id])

    const chengeStatus = useCallback((id: string, taskId: string, status: number) => {
        dispatch(updateTaskThunk(id, taskId, {status}))
    }, [id])


    const chengeTaskTitle = (id: string, Taskid: string, text: string) => {
        dispatch(updateTaskThunk(id, Taskid, {title: text}))
    }


    let filterForTasks = tasks
    if (filterForTasks) {
        if (filter === 'active') {
            filterForTasks = tasks.filter((item: any) => item.status === 0)
        }
        if (filter === 'complete') {
            filterForTasks = tasks.filter((item: any) => item.status === 2)
        }
    }


    return (
        <Grid item spacing={2}>
            <Paper elevation={3} style={{padding: '20px'}}>

                <Typography variant="h3"
                            style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>

                    <InputSpan
                        text={title}
                        onChengeTitleHendler={onChengeTitleHendler}
                    />
                    <Button
                        onClick={() => removeTodoList(id)}
                        disabled={entiryStatus === 'loading'}
                    >
                        <DeleteOutlineIcon/>
                    </Button>

                </Typography>

                <AddItemForm addTask={addTask} status={entiryStatus}/>

                {filterForTasks === undefined ? null : filterForTasks.map(item => {


                    return <List key={item.id}>

                        <Task
                            id={id}
                            item={item}
                            removeTask={removeTask}
                            chengeTaskTitle={chengeTaskTitle}
                            chengeStatus={chengeStatus}
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

