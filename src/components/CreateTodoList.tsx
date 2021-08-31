import {v1} from "uuid";
import React, {useCallback} from "react";
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


export const CreateTodoList = React.memo( () => {

    const dispatch = useDispatch()
    const todoListArray = useSelector<AppRootState, Array<TodoListType>>(state => state.todolist)
    const allTasks = useSelector<AppRootState, any>(state => state.tasks)

    const addTodoList = useCallback( (id: string, value: string) => {
        const action = addTodolistAction(id, value)
        dispatch(action)
    }, [todoListArray])

    const chengeTitle = useCallback( (id: string, text: string) => {
        const action = chengeTitleTodolistAction(id, text)
        dispatch(action)
    }, [todoListArray])

    const removeTodoList = useCallback( (id: string) => {
        const action = removeTodolistAction(id)
        dispatch(action)
    }, [todoListArray])

    const chengeFilter = useCallback( (todoListId: string, value: FilterValuesType) => {
        const action = chengeFilterTodolistAction(todoListId, value)
        dispatch(action)
    }, [allTasks])

    return (
        <div>

            <Grid container spacing={10}>
                <AddItemForm addTask={addTodoList} id={v1()}/>
            </Grid>

            <Grid container spacing={10}>
                {todoListArray.map((el: any) => {
                    let filterForTasks = allTasks[el.id]





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
})

