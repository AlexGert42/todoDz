import {FilterValuesType, TodoListType} from "../components/CreateTodoList";
import {
    ADD_TODOLIST,
    CHENGE_FILTER_TODOLIST,
    CHENGE_NAME_TODOLIST,
    REMOVE_TODOLIST
} from "./createTodolistReducer.test";


type removeTodolistActionType = {
    type: 'REMOVE_TODOLIST'
    payload: string
}
type addTodolistActionType = {
    type: 'ADD_TODOLIST'
    payload: string
}
type chengeNameTodolistActionType = {
    type: 'CHENGE_NAME_TODOLIST'
    id: string
    payload: string
}
type chengeFilterTodolistActionType = {
    type: 'CHENGE_FILTER_TODOLIST'
    id: string
    payload: FilterValuesType
}

type createTodolistActionType = removeTodolistActionType |
    addTodolistActionType |
    chengeNameTodolistActionType |
    chengeFilterTodolistActionType




export const CreateTodolistReducer = (state: Array<TodoListType>, action: createTodolistActionType) => {
    switch (action.type) {

        case REMOVE_TODOLIST:
            let newArrayTodoList = state.filter(el => el.id !== action.payload)
            return newArrayTodoList
        case ADD_TODOLIST:
            return [
                ...state,
                action.payload
            ]
        case CHENGE_NAME_TODOLIST:
            let newTitleTodolist = [...state]
            newTitleTodolist.find(el => {
                if (el.id === action.id) {
                    el.title = action.payload
                }
            })
            return newTitleTodolist
            case CHENGE_FILTER_TODOLIST :
                let newFilterTodolist = [...state]
                newFilterTodolist.find(el => {
                    if (el.id === action.id) {
                        el.filter = action.payload
                    }
                })
                return newFilterTodolist
        default:
            return state
    }
}