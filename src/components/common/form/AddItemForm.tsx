import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {TextField, Button, Typography, Grid, Paper} from "@material-ui/core";


export type ErrorType = {
    style: string
    textSpan: string
}

type TodoListPropTypes = {
    addTask: (title: string) => void
    status?: string
}

export const AddItemForm = React.memo(({addTask, status}: TodoListPropTypes) => {

    const [valueInput, setValueInput] = useState<string>('')
    const [errorInput, setErrorInput] = useState<ErrorType>({
        style: '',
        textSpan: ''
    })
    const chengeInput = (e: ChangeEvent<HTMLInputElement>) => setValueInput(e.target.value)
    const sendNewTask = () => {
        if (valueInput.trim()) {
            addTask(valueInput)
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
                           disabled={status === 'loading'}
                           margin="normal"
                           value={valueInput}
                           onChange={chengeInput}
                           onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                               if (e.charCode === 13) sendNewTask()
                               if (e.charCode !== 32) setErrorInput({style: '', textSpan: ''})
                           }}/>
                <Button variant="contained" color="primary" onClick={sendNewTask} disabled={status === 'loading'}>Create Task</Button>
                <Typography>{errorInput.textSpan}</Typography>
            </Paper>
        </Grid>
    )
})