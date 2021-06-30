import React from 'react';
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

type PropsType = {
    id: string
    title: string,
    tasks: Array<TaskType>,
    chengeFilter: (id: string, value: FilterValuesType,) => void
    filter: FilterValuesType
    chengeTitle: (id: string, text: string) => void
    removeTodoList: (id: string) => void
}


export const TodoList = ({
                             title,
                             tasks,
                             filter,
                             chengeFilter,
                             id,
                             chengeTitle,
                             removeTodoList
                         }: PropsType) => {


    const dispatch = useDispatch()
    const onChengeTitleHendler = (text: string) => chengeTitle(id, text)

    const addTask = (id: string, nameTask: string) => {
        const action = addTaskTodolistAction(id, nameTask)
        dispatch(action)
    }

    const removeTask = (id: string, idTask: string) => {
        const action = removeTaskTodolistAction(id, idTask)
        dispatch(action)
    }

    const chengeIsDone = (id: string, Taskid: string) => {
        const action = chengeIsDoneTaskTodolistAction(id, Taskid)
        dispatch(action)
    }

    const chengeTaskTitle = (id: string, Taskid: string, text: string) => {
        const action = chengeTitleTaskTodolistAction(id, Taskid, text)
        dispatch(action)
    }


    return (
        <Grid item spacing={5}>
            <Paper elevation={3} style={{padding: '20px'}}>

                <Typography variant="h3" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>

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
                {!tasks ? null : tasks.map(item => {
                    const chengeChecked = (id: string, ItemId: string) => chengeIsDone(id, ItemId)

                    const onChengeTaskTitleHendler = (text: string) => {
                        chengeTaskTitle(id, item.id, text)
                    }

                    return <List key={item.id}>
                        <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>

                            <Checkbox
                                onChange={() => chengeChecked(id, item.id)} checked={item.isDone}
                                color="secondary"/>

                            <InputSpan text={item.title} onChengeTitleHendler={onChengeTaskTitleHendler}/>

                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => removeTask(id, item.id)}
                            >X</Button>

                        </ListItem>

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
}

