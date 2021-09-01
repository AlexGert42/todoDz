import {ServTodoListType, TodolistApi} from "../../api/todoApi";
import {TodoListType} from "./createTodolistReducer";
import {Dispatch} from "redux";

export type setTodolistActionType = {
    type: 'SET_TODOLIST'
    payload: ServTodoListType[]
}

export type removeTodolistActionType = {
    type: 'REMOVE_TODOLIST'
    payload: string
}
export type addTodolistActionType = {
    type: 'ADD_TODOLIST'
    payload: TodoListType
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


export const setTodolistAction = (todolists: ServTodoListType[]): setTodolistActionType => ({
    type: 'SET_TODOLIST',
    payload: todolists
})


export const removeTodolistAction = (idTodolist: string): removeTodolistActionType => ({
    type: 'REMOVE_TODOLIST',
    payload: idTodolist
})

export const addTodolistAction = (newTodolist: any): addTodolistActionType => ({
    type: 'ADD_TODOLIST',
    payload: newTodolist
})




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

//////////////


export const getTodolistThunk = () => (dispatch: Dispatch) => {
    TodolistApi.getTodolist()
        .then((res: any) => {
            if (res.status === 200) {
                dispatch(setTodolistAction(res.data))
            }

        })
}

export const addTodolistThunk = (title: string) => (dispatch: Dispatch) => {
    TodolistApi.setTodolist(title)
        .then((res: any) => {

            if (res.resultCode === 0) {
                dispatch(addTodolistAction(res.data.item))
            }
        })
}

export const removeTodolistThunk = (id: string) => (dispatch: Dispatch) => {
    TodolistApi.deleteTodolist(id)
        .then((res: any) => {
            console.log(res)
            if (res.resultCode === 0) {
                dispatch(removeTodolistAction(id))
            }

        })
}

export const chengeNameTodolistThunk = (id: string, text: string) => (dispatch: Dispatch) => {
    TodolistApi.updateTodolist(id, text)
        .then((res: any) => {
            if (res.resultCode === 0) {
                dispatch(chengeTitleTodolistAction(id, text))
            }

        })
}



