import React from 'react';
import {FilterValuesType} from './CreateTodoList'
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

type PropsType = {
    id: string
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: string, task: string) => void,
    chengeFilter: (value: FilterValuesType, id: string) => void
    addTask: (id: string, title: string) => void
    chengeIsDone: (id: string, ItemId: string) => void
    filter: FilterValuesType
    chengeTaskTitle: (id: string, Taskid: string, text: string) => void
    chengeTitle: (id: string, text: string) => void
}


export const TodoList = ({
                             title,
                             tasks,
                             filter,
                             removeTask,
                             chengeFilter,
                             addTask,
                             chengeIsDone,
                             id,
                             chengeTaskTitle,
                             chengeTitle
                         }: PropsType) => {

    const onChengeTitleHendler = (text: string) => chengeTitle(id, text)


    return (
        <Grid item spacing={5}>
            <Paper elevation={3} style={{padding: '20px'}}>

                <Typography variant="h3">
                    <InputSpan
                        text={title}
                        onChengeTitleHendler={onChengeTitleHendler}/>
                </Typography>

                <AddItemForm addTask={addTask} id={id}/>

                {!tasks ? null : tasks.map(item => {
                    const chengeChecked = (id: string, ItemId: string) => chengeIsDone(id, ItemId)

                    const onChengeTaskTitleHendler = (text: any) => {
                        chengeTaskTitle(id, item.id, text)
                    }

                    return <List key={item.id}>
                        <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>

                            <Checkbox onChange={() => chengeChecked(id, item.id)} checked={item.isDone}
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
                            onClick={() => chengeFilter('all', id)}>All
                    </Button>
                    <Button color={filter === 'active' ? 'secondary' : 'primary'}
                            onClick={() => chengeFilter('active', id)}>Active
                    </Button>
                    <Button color={filter === 'complete' ? 'secondary' : 'primary'}
                            onClick={() => chengeFilter('complete', id)}>Completed
                    </Button>
                </ButtonGroup>


            </Paper>
        </Grid>
    )
}

