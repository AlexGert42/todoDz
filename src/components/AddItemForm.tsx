import React, {ChangeEvent, KeyboardEvent, useCallback, useContext, useState} from "react";
import {TextField, Button, Typography, Grid, Paper} from "@material-ui/core";

// export type TaskType = {
//     id: string,
//     title: string,
//     isDone: boolean
// }
export type ErrorType = {
    style: string
    textSpan: string
}

type TodoListPropTypes = {
    addTask: (id: string, title: string) => void
    id: string
}

export const AddItemForm = React.memo(({addTask, id}: TodoListPropTypes) => {

    console.log('add item form ')
    const [valueInput, setValueInput] = useState<string>('')
    const [errorInput, setErrorInput] = useState<ErrorType>({
        style: '',
        textSpan: ''
    })
    const chengeInput = (e: ChangeEvent<HTMLInputElement>) => setValueInput(e.target.value)
    const sendNewTask = () => {
        if (valueInput.trim()) {
            addTask(id, valueInput)
            setValueInput('')
        } else {
            setErrorInput({
                style: 'error',
                textSpan: 'Error'
            })
        }
    }

    return (
        <Grid item xs={12}>
            <Paper elevation={3} style={{padding: '20px'}}>

                <TextField className={errorInput.style}
                           fullWidth
                           margin="normal"
                           value={valueInput}
                           onChange={chengeInput}
                           onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                               if (e.charCode === 13) sendNewTask()
                               if (e.charCode !== 32) setErrorInput({style: '', textSpan: ''})
                           }}/>
                <Button variant="contained" color="primary" onClick={sendNewTask}>Create Task</Button>
                <Typography>{errorInput.textSpan}</Typography>
            </Paper>
        </Grid>
    )
})