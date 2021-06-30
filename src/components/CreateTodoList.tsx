import {v1} from "uuid";
import React from "react";
import {AddItemForm} from "./AddItemForm";
import {TodoList} from "./TodoList";
import {Grid} from "@material-ui/core";


import {FilterValuesType, TodoListType} from "../store/createTodolistReducer";

import {
    addTodolistAction,
    chengeFilterTodolistAction,
    chengeTitleTodolistAction,
    removeTodolistAction
} from "../store/createTodolistAction";


import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../store/store";


export const CreateTodoList = () => {
    const dispatch = useDispatch()
    const todoListArray = useSelector<AppRootState, Array<TodoListType>>(state => state.todolist)
    const allTasks = useSelector<AppRootState, any>(state => state.tasks)

    const addTodoList = (id: string, value: string) => {
        const action = addTodolistAction(id, value)
        dispatch(action)
    }

    const chengeTitle = (id: string, text: string) => {
        const action = chengeTitleTodolistAction(id, text)
        dispatch(action)
    }

    const removeTodoList = (id: string) => {
        const action = removeTodolistAction(id)
        dispatch(action)
    }

    const chengeFilter = (todoListId: string, value: FilterValuesType) => {
        const action = chengeFilterTodolistAction(todoListId, value)
        dispatch(action)
    }

    return (
        <div>

            <Grid container spacing={10}>
                <AddItemForm addTask={addTodoList} id={v1()}/>
            </Grid>

            <Grid container spacing={10}>
                {todoListArray.map((el: any) => {
                    let filterForTasks = allTasks[el.id]
                    if (el.filter === 'active') {
                        filterForTasks = allTasks[el.id].filter((item: any) => !item.isDone)
                    }
                    if (el.filter === 'complete') {
                        filterForTasks = allTasks[el.id].filter((item: any) => item.isDone)
                    }
                    return <TodoList
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        tasks={filterForTasks}
                        chengeFilter={chengeFilter}
                        filter={el.filter}
                        removeTodoList={removeTodoList}
                        chengeTitle={chengeTitle}
                    />
                })}
            </Grid>

        </div>
    );
}


