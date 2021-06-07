import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./components/TodoList";
import {v1} from 'uuid'

export type FilterValuesType = 'all' | 'complete' | 'active';

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    let [task, setTask] = useState<Array<TaskType>>(
        [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GrphQL', isDone: false},
        ]
    )




    const removeTask = (idTask: string) => {
        let newArrayTask = task.filter(el => el.id != idTask)
        setTask(newArrayTask)
    }
    const addTask = (nameTask: string) => {
        let newTask = [
            ...task,
            {
                id: v1(),
                title: nameTask,
                isDone: false
            }
        ]
        setTask(newTask)
    }

    const chengeIsDone = (id: string) => {
        let chengeTask = [...task]
        chengeTask.find(el => {
            if (el.id === id) {
                if (el.isDone) {
                    el.isDone = false
                } else {
                    el.isDone = true
                }
            }
        })
        setTask(chengeTask)
    }

    const chengeFilter = (value: FilterValuesType, todoListId: string) => {
        let newTodoListArray = [...todoListArray]
        newTodoListArray.find(el => {
            if (el.id !== todoListId) return
            el.filter = value
        })
        setTodoListArray(newTodoListArray)
    }

    const [todoListArray, setTodoListArray] = useState<Array<TodoListType>>([
        {id: v1(), title: 'block1', filter: 'all'},
        {id: v1(), title: 'block2', filter: 'all'},
    ])



    return (
        <div className="App">
            {todoListArray.map(el => {

                let filterForTasks = task
                if (el.filter === 'active') {
                    filterForTasks = task.filter(el => !el.isDone)
                }
                if (el.filter === 'complete') {
                    filterForTasks = task.filter(el => el.isDone)
                }

                return  <TodoList
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

export default App;
