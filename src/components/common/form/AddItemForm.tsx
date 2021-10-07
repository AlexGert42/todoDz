import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import style from './AddItemForm.module.scss'


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
        <Grid className={style.form} item xs={12}>
            <TextField
                className={style.form__input}
                fullWidth
                color={'primary'}
                disabled={status === 'loading'}
                margin="normal"
                value={valueInput}
                onChange={chengeInput}
                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.charCode === 13) sendNewTask()
                    if (e.charCode !== 32) setErrorInput({style: '', textSpan: ''})
                }}/>
            <Button
                className={style.form__btn}
                color={'primary'}
                variant="contained"
                onClick={sendNewTask}
                disabled={status === 'loading'}>
                +
            </Button>
            <Typography className={style.form__error}>{errorInput.textSpan}</Typography>
        </Grid>
    )
})