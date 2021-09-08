import {
    addTodolistActionType,
    removeTodolistActionType,
    chengeNameTodolistActionType,
    chengeFilterTodolistActionType,
    setTodolistActionType, DisabledActionType
} from "./createTodolistAction";
import {ServTodoListType} from "../../api/todoApi";


export type FilterValuesType = 'all' | 'complete' | 'active';
export type TodoListType = ServTodoListType & {
    filter: FilterValuesType,
    entiryStatus: string
}


type createTodolistActionType = removeTodolistActionType |
    addTodolistActionType |
    chengeNameTodolistActionType |
    chengeFilterTodolistActionType |
    setTodolistActionType |
    DisabledActionType


const initialState: Array<TodoListType> = []


export const CreateTodolistReducer = (state: Array<TodoListType> = initialState, action: createTodolistActionType): Array<TodoListType> | [] => {
    switch (action.type) {
        case "SET_TODOLIST":
            return action.payload.map(el => {
                return {
                    ...el,
                    filter: 'all',
                    entiryStatus: ''
                }
            })

        case 'REMOVE_TODOLIST':
            let newArrayTodoList = state.filter(el => el.id !== action.payload)
            return [...newArrayTodoList]
        case 'ADD_TODOLIST':
            return [
                ...state,
                {...action.payload, filter: 'all'}
            ]
        case 'CHENGE_NAME_TODOLIST':
            let newTitleTodolist = [...state]
            newTitleTodolist.find(el => {
                if (el.id === action.id) {
                    return {
                        ...el,
                        title: action.payload
                    }
                }
            })
            return [...newTitleTodolist]
        case 'CHENGE_FILTER_TODOLIST' :
            let newFilterTodolist = state.map(el => {
                if (el.id === action.id) {
                    return {
                        ...el,
                        filter: action.payload
                    }
                }
                return el
            })
            return [...newFilterTodolist]
        case 'SET_DISABLED':
            let newStatusTodolist = state.map(el => {
                if (el.id === action.id) {
                    return {
                        ...el,
                        entiryStatus: action.payload
                    }
                }
                return el
            })
            return [...newStatusTodolist]
        default:
            return state
    }
}