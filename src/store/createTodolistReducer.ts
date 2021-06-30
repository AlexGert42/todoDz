
import {addTodolistActionType, removeTodolistActionType, chengeNameTodolistActionType, chengeFilterTodolistActionType} from "./createTodolistAction";
import {v1} from "uuid";


export type FilterValuesType = 'all' | 'complete' | 'active';
export type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType

}


type createTodolistActionType = removeTodolistActionType |
    addTodolistActionType |
    chengeNameTodolistActionType |
    chengeFilterTodolistActionType

export const todoListId1 = v1()//
export const todoListId2 = v1()//

const initialState: Array<TodoListType> = [
    {id: todoListId1, title: 'block1', filter: 'all'},
    {id: todoListId2, title: 'block2', filter: 'all'},
]

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
                    el.title = action.payload
                }
            })
            return [...newTitleTodolist]
            case 'CHENGE_FILTER_TODOLIST' :
                let newFilterTodolist = [...state]
                newFilterTodolist.find(el => {
                    if (el.id === action.id) {
                        el.filter = action.payload
                    }
                })
                return [...newFilterTodolist]
        default:
            return state
    }
}