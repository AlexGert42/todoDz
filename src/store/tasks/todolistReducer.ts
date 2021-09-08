import {
    removeTaskActionType,
    addTaskActionType,
    setTasksType, updateTaskTodolistActionType, SetDisabledTaskType
} from "./todolistAction";
import {ServTaskType} from "../../api/todoApi";


type TodolistActionType = removeTaskActionType | addTaskActionType | updateTaskTodolistActionType | setTasksType | SetDisabledTaskType

export type TaskType = ServTaskType & {
    statusProcess: string
}


export type StateTaskType = {
    [key: string]: Array<TaskType>
}

const initialState = {}


export const TodolistReducer = (state: StateTaskType = initialState, action: TodolistActionType): StateTaskType => {
    let newArrayTasks = [
        ...state[action.id] || []
    ]
    switch (action.type) {
        case 'SET_TASK':
            return {
                ...state,
                [action.id]: action.payload.map(el => {
                    return {
                        ...el,
                        statusProcess: ''
                    }
                })
            }
        case 'ADD_TASK':
            newArrayTasks.push(action.payload)
            return {
                ...state,
                [action.id]: [...newArrayTasks]
            }
        case 'REMOVE_TASK':
            newArrayTasks = newArrayTasks.filter(el => el.id !== action.taskId)
            return {
                ...state,
                [action.id]: [...newArrayTasks]
            }
        case 'CHENGE_TASK':
            let newArrayTaskTitle = newArrayTasks.map(el => {
                if (el.id === action.taskId) {
                    return {
                        ...el,
                        ...action.payload
                    }
                }
                return el
            })
            return {
                ...state,
                [action.id]: [...newArrayTaskTitle]
            }
        case 'DISABLED_TASK':
            let newArrayTaskDisabled = newArrayTasks.map(el => {
                if (el.id === action.taskId) {
                    return {
                        ...el,
                        statusProcess: action.payload
                    }
                }
               return el
            })
            return {
                ...state,
                [action.id]: [...newArrayTaskDisabled]
            }
        default:
            return state
    }
}