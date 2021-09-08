import {v1} from "uuid";
import React, {useCallback, useEffect} from "react";
import {AddItemForm} from "../form/AddItemForm";
import {TodoList} from "../tasks/TodoList";
import {Container, Grid} from "@material-ui/core";


import {FilterValuesType, TodoListType} from "../../../store/todolist/createTodolistReducer";

import {
    addTodolistThunk,
    chengeFilterTodolistAction, chengeNameTodolistThunk,
    getTodolistThunk,
    removeTodolistThunk
} from "../../../store/todolist/createTodolistAction";


import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../store/store";
import {StateTaskType} from "../../../store/tasks/todolistReducer";


export const CreateTodoList = React.memo(() => {

    const todoListArray = useSelector<AppRootState, Array<TodoListType>>(state => state.todolist)
    const allTasks = useSelector<AppRootState, StateTaskType>(state => state.tasks)
    const progress = useSelector<AppRootState, boolean>(state => state.app.initApp)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodolistThunk())
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
        const action = chengeFilterTodolistAction(todoListId, value)
        dispatch(action)
    }, [])

    return (
        <Container maxWidth="xl">
            {
                progress &&
                <>
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
                </>
            }


        </Container>
    );
})

