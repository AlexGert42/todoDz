import React, {useCallback, useEffect} from "react";
import style from './CreateTodoList.module.scss'
import {ItemForm} from "../../common";
import {TodoList} from "../tasks/TodoList";
import {Grid} from "@material-ui/core";
import {FilterValuesType} from "../../../store/todolist/todolistReducer";

import {useSelector} from "react-redux";

import {selectors} from '../../selectors'
import {Redirect} from "react-router-dom";
import {useActions} from "../../../store/store";
import {todolistActions} from '../../../store'


export const CreateTodoList = React.memo(() => {
    let demo = false

    const auth = useSelector(selectors.authSelector)
    const todolistArray = useSelector(selectors.todolistArraySelector)
    const allTasks = useSelector(selectors.allTaskSelector)

    const {chengeNameTodolistThunk, removeTodolistThunk, getTodolistThunk, chengeFilterTodolistAction} = useActions(todolistActions)


    useEffect(() => {
        if (!demo) {
            getTodolistThunk()
        }
    }, [])


    const chengeTitle = useCallback((id: string, text: string) => {
        chengeNameTodolistThunk({id, text})
    }, [todolistArray])

    const removeTodoList = useCallback((id: string) => {
        removeTodolistThunk(id)
    }, [])


    const chengeFilter = useCallback((todoListId: string, value: FilterValuesType) => {
        chengeFilterTodolistAction({idTodolist: todoListId, newfilterTodolist: value})
    }, [])


    if (!auth) {
        return <Redirect to={'/'}/>
    }

    return (
        <div className={style.todolist}>

            <Grid className={style.todolist__items} container spacing={10}>

                {todolistArray.map((el: any) => {
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

