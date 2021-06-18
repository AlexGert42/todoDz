import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import style from './CreateFormTodoList.module.scss'

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}
export type ErrorType = {
    style: string
    textSpan: string
}

type TodoListPropTypes = {
    addTask: (id: string, title: string) => void
    id: string
    style: any
}

export const AddItemForm = ({addTask, id}: TodoListPropTypes) => {
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
        <div>
            <input className={errorInput.style}
                   value={valueInput}
                   onChange={chengeInput}
                   onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                       if (e.charCode === 13) sendNewTask()
                       if (e.charCode !== 32) setErrorInput({style: '', textSpan: ''})
                   }}/>
            <button onClick={sendNewTask}>Create Task</button>
            <span>{errorInput.textSpan}</span>
        </div>
    )
}