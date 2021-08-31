
import {addTodolistActionType, removeTodolistActionType, chengeNameTodolistActionType, chengeFilterTodolistActionType} from "./createTodolistAction";
import {v1} from "uuid";
import {ServTodoListType} from "../api/todoApi";


export type FilterValuesType = 'all' | 'complete' | 'active';
export type TodoListType = ServTodoListType & {
    filter: FilterValuesType
}


type createTodolistActionType = removeTodolistActionType |
    addTodolistActionType |
    chengeNameTodolistActionType |
    chengeFilterTodolistActionType



const initialState: Array<TodoListType> = []


export const CreateTodolistReducer = (state: Array<TodoListType> = initialState, action: createTodolistActionType): any => {
    switch (action.type) {
        case 'REMOVE_TODOLIST':
            let newArrayTodoList = state.filter(el => el.id !== action.payload)
            return [...newArrayTodoList]
        case 'ADD_TODOLIST':
            return [
                ...state,
                action.payload
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
        default:
            return state
    }
}