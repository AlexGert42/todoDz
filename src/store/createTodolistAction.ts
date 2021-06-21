import {v1} from "uuid";


export const removeTodolistAction = (idTodolist: string) => ({
    type: 'REMOVE_TODOLIST',
    payload: idTodolist
})

export const addTodolistAction = (titleTodolist: string) => {
    let newTodoList = {
        id: v1(),
        title: titleTodolist,
        filter: 'all'
    }
    return {
        type: 'ADD_TODOLIST',
        payload: newTodoList
    }
}

export const chengeTitleTodolistAction = (idTodolist: string, newTitleTodolist: string) => ({
    type: 'CHENGE_NAME_TODOLIST',
    id: idTodolist,
    payload: newTitleTodolist
})

export const chengeFilterTodolistAction = (idTodolist: string, newfilterTodolist: string) => ({
    type: 'CHENGE_FILTER_TODOLIST',
    id: idTodolist,
    payload: newfilterTodolist
})