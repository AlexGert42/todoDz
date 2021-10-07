import React, {useCallback, useEffect} from 'react';
import style from './TodoList.module.scss';
import {Input, ItemForm} from "../../common"
import List from '@material-ui/core/List';
import {Button, ButtonGroup, Grid, Paper, Typography,} from '@material-ui/core';
import {FilterValuesType} from "../../../store/todolist/todolistReducer";
import {Task} from "./task/Task";
import {TaskType} from '../../../store/tasks/tasksReducer';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {useActions} from "../../../store/store";
import {tasksActions} from "../../../store";


export type PropsTypeTodolist = {
    id: string
    title: string,
    entiryStatus: string
    tasks: Array<TaskType>,
    chengeFilter: (id: string, value: FilterValuesType) => void
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

    const {addTaskThunk, removeTaskThunk, updateTaskThunk, getTaskThunk} = useActions(tasksActions)

    useEffect(() => {
        getTaskThunk(id)
    }, [id])


    const onChengeTitleHendler = (text: string) => chengeTitle(id, text)

    const addTask = useCallback((nameTask: string) => {
        addTaskThunk({id, nameTask})
    }, [id])

    const removeTask = useCallback((id: string, taskId: string) => {
        removeTaskThunk({id, taskId})
    }, [id])

    const chengeStatus = useCallback((id: string, taskId: string, status: number) => {
        updateTaskThunk({id, taskId, update: {status}})
    }, [id])


    const chengeTaskTitle = (id: string, taskId: string, title: string) => {
        updateTaskThunk({id, taskId, update: {title}})
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////

    let filterForTasks = tasks
    if (filterForTasks) {
        if (filter === 'active') {
            filterForTasks = tasks.filter((item: any) => item.status === 0)
        }
        if (filter === 'complete') {
            filterForTasks = tasks.filter((item: any) => item.status === 2)
        }
    }


    const buttonFilter = (value: FilterValuesType, text: string) => {
        return (
            <Button color={filter === value ? 'secondary' : 'primary'}
                    onClick={() => chengeFilter(id, value)}>{text}
            </Button>
        )
    }


    return (
        <Grid className={style.todolist} item >
            <Paper elevation={3} style={{padding: '20px'}}>

                <Typography variant="h3"
                            style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>

                    <Input.InputSpan
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

                <ItemForm.AddItemForm addTask={addTask} status={entiryStatus}/>

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

                    {buttonFilter('all', 'All')}
                    {buttonFilter('active', 'Active')}
                    {buttonFilter('complete', 'Completed')}

                </ButtonGroup>


            </Paper>
        </Grid>
    )
})

