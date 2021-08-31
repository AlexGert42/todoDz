import {ServTodoListType} from "../api/todoApi";
import {TodoListType} from "./createTodolistReducer";


export type removeTodolistActionType = {
    type: 'REMOVE_TODOLIST'
    payload: string
}
export type addTodolistActionType = {
    type: 'ADD_TODOLIST'
    payload: {
        id: string
        title: string
        filter: string
    }
}
export type chengeNameTodolistActionType = {
    type: 'CHENGE_NAME_TODOLIST'
    id: string
    payload: string
}
export type chengeFilterTodolistActionType = {
    type: 'CHENGE_FILTER_TODOLIST'
    id: string
    payload: any
}





export const removeTodolistAction = (idTodolist: string): removeTodolistActionType => ({
    type: 'REMOVE_TODOLIST',
    payload: idTodolist
})

export const addTodolistAction = (id: string, titleTodolist: string): addTodolistActionType => {
    let newTodoList: TodoListType = {
        id,
        title: titleTodolist,
        filter: 'all',
        addedDate: '',
        order: 0
    }
    return {
        type: 'ADD_TODOLIST',
        payload: newTodoList
    }
}

export const chengeTitleTodolistAction = (idTodolist: string, newTitleTodolist: string): any=> ({
    type: 'CHENGE_NAME_TODOLIST',
    id: idTodolist,
    payload: newTitleTodolist
})

export const chengeFilterTodolistAction = (idTodolist: string, newfilterTodolist: string): chengeFilterTodolistActionType =>  {
    return {
        type: 'CHENGE_FILTER_TODOLIST',
        id: idTodolist,
        payload: newfilterTodolist
    }
}


