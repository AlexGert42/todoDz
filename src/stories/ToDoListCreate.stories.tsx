import React, {useState} from 'react';
import '../App.scss';
import {TestTodoList} from "./TodoList.stories";
import {v1} from 'uuid'

import App from "../App";


export default {
    title: 'TestApp',
    component: App, TestTodoList,

}



export type FilterValuesType = 'all' | 'complete' | 'active';

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType

}

export const TestApp = () => {

    const removeTask = (id: string, idTask: string) => {
        let tasks = allTasks[id]
        let newArrayTask = tasks.filter(el => el.id != idTask)
        allTasks[id] = newArrayTask
        setAllTasks({...allTasks, newArrayTask})
    }
    const addTask = (id: string, nameTask: string) => {
        let newTask = {
            id: v1(),
            title: nameTask,
            isDone: false
        }
        let tasksArray = [...allTasks[id], newTask]
        allTasks[id] = tasksArray
        setAllTasks({...allTasks, tasksArray})
    }


    const chengeFilter = (value: FilterValuesType, todoListId: string) => {
        let newTodoListArray = [...todoListArray]
        newTodoListArray.find(el => {
            if (el.id !== todoListId) return
            el.filter = value
        })
        setTodoListArray(newTodoListArray)
    }

    let todoListId1 = v1()
    let todoListId2 = v1()

    const [todoListArray, setTodoListArray] = useState<Array<TodoListType>>([
        {id: todoListId1, title: 'block1', filter: 'all'},
        {id: todoListId2, title: 'block2', filter: 'all'},
    ])


    const [allTasks, setAllTasks] = useState({
        [todoListId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GrphQL', isDone: false},
        ],
        [todoListId2]: [
            {id: v1(), title: 'Book', isDone: true},
            {id: v1(), title: 'Apple', isDone: true},
            {id: v1(), title: 'Milk', isDone: false},
        ]
    })

    const chengeIsDone = (id: string, Taskid: string) => {
        let tasks = allTasks[id]
        tasks.find(el => {
            if (el.id === Taskid) {
                if (el.isDone) {
                    el.isDone = false
                } else {
                    el.isDone = true
                }
            }
        })
        setAllTasks({...allTasks})
    }


    return (
        <div className="App">
            {todoListArray.map(el => {

                let filterForTasks = allTasks[el.id]
                if (el.filter === 'active') {
                    filterForTasks = allTasks[el.id].filter(item => !item.isDone)
                }
                if (el.filter === 'complete') {
                    filterForTasks = allTasks[el.id].filter(item => item.isDone)
                }

                return <TestTodoList
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    tasks={filterForTasks}
                    removeTask={removeTask}
                    chengeFilter={chengeFilter}
                    addTask={addTask}
                    chengeIsDone={chengeIsDone}
                    filter={el.filter}
                />
            })}

        </div>
    );
}


