import React from 'react';
import {FilterValuesType} from './CreateTodoList'
import {AddItemForm, TaskType} from "./AddItemForm";
import {InputSpan} from "./InputSpan";

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
        <div>
            <h3><InputSpan text={title} onChengeTitleHendler={onChengeTitleHendler}/></h3>
            <AddItemForm addTask={addTask} id={id} style={{}}/>
            <ul>
                {!tasks ? null : tasks.map(item => {
                    const chengeChecked = (id: string, ItemId: string) => chengeIsDone(id, ItemId)

                    const onChengeTaskTitleHendler = (text: any) => {
                        chengeTaskTitle(id, item.id, text)
                    }

                    return <li key={item.id}>
                        <input type="checkbox" onChange={() => chengeChecked(id, item.id)} checked={item.isDone}/>
                        <InputSpan text={item.title} onChengeTitleHendler={onChengeTaskTitleHendler}/>
                        <button onClick={() => removeTask(id, item.id)}>X</button>
                    </li>

                })}
            </ul>

            <div>
                <button className={filter === 'all' ? 'btnActiv' : ''} onClick={() => chengeFilter('all', id)}>All
                </button>
                <button className={filter === 'active' ? 'btnActiv' : ''}
                        onClick={() => chengeFilter('active', id)}>Active
                </button>
                <button className={filter === 'complete' ? 'btnActiv' : ''}
                        onClick={() => chengeFilter('complete', id)}>Completed
                </button>
            </div>
        </div>
    )
}

