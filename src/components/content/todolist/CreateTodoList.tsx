
import React, {useCallback, useEffect} from "react";
import {AddItemForm} from "../form/AddItemForm";
import {TodoList} from "../tasks/TodoList";
import {Grid} from "@material-ui/core";


import {FilterValuesType, TodoListType, chengeFilterTodolistAction} from "../../../store/todolist/todolistReducer";

import {
    addTodolistThunk,
    chengeNameTodolistThunk,
    getTodolistThunk,
    removeTodolistThunk
} from "../../../store/todolist/todolistAction";


import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../store/store";
import {StateTaskType} from "../../../store/tasks/tasksReducer";
import {Redirect} from "react-router-dom";


export const CreateTodoList = React.memo(() => {
    const auth = useSelector<AppRootState, boolean>(state => state.app.authMe)
    const todoListArray = useSelector<AppRootState, Array<TodoListType>>(state => state.todolist)
    const allTasks = useSelector<AppRootState, StateTaskType>(state => state.tasks)


    const dispatch = useDispatch()

    let demo = false
    useEffect(() => {
        if (!demo) {
            dispatch(getTodolistThunk())
        }
    }, [])


    const addTodoList = useCallback((value: string) => {
        dispatch(addTodolistThunk(value))
    }, [])

    const chengeTitle = useCallback((id: string, text: string) => {
        dispatch(chengeNameTodolistThunk(id, text))
    }, [todoListArray])

    const removeTodoList = useCallback((id: string) => {
        dispatch(removeTodolistThunk(id))
    }, [])

    const chengeFilter = useCallback((todoListId: string, value: FilterValuesType) => {
        dispatch(chengeFilterTodolistAction({idTodolist: todoListId, newfilterTodolist: value}))
    }, [])


    if (!auth) {
        return <Redirect to={'/'}/>
    }

    return (
        <div >

            <Grid container spacing={10}>
                <AddItemForm addTask={addTodoList}/>
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
                        entiryStatus={el.entiryStatus}
                    />
                })}

            </Grid>
        </div>
    );
})

