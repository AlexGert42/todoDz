import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from '../App'

type PropsType = {
    id: string
    title: string,
    tasks: Array<TaskType>,
    removeTask: (task: string) => void,
    chengeFilter: (value: FilterValuesType, id: string) => void
    addTask: (title: string) => void
    chengeIsDone: (id: string) => void
    filter: FilterValuesType
}
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}
type ErrorType = {
    style: string
    textSpan: string
}

export const TodoList = ({title, tasks, filter, removeTask, chengeFilter, addTask, chengeIsDone, id}: PropsType) => {
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
        <div>
            <h3>{title}</h3>
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
            <ul>
                {tasks.map(item => {
                    const chengeChecked = (id: string) => chengeIsDone(id)

                    return <li key={item.id}>
                        <input type="checkbox" onChange={() => chengeChecked(item.id)} checked={item.isDone}/>
                        <span>{item.title}</span>
                        <button onClick={() => removeTask(item.id)}>X</button>
                    </li>

                })}
            </ul>

            <div>
                <button className={filter === 'all' ? 'btnActiv' : ''} onClick={() => chengeFilter('all', id)}>All</button>
                <button className={filter === 'active' ? 'btnActiv' : ''} onClick={() => chengeFilter('active', id)}>Active</button>
                <button className={filter === 'complete' ? 'btnActiv' : ''} onClick={() => chengeFilter('complete', id)}>Completed</button>
            </div>
        </div>
    )
}