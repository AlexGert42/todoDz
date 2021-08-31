import {
    removeTaskActionType,
    addTaskActionType,
    chengeTaskTitleActionType,
    chengeIsDoneActionType
} from "./todolistAction";
import {ServTaskType} from "../api/todoApi";


type TodolistActionType = removeTaskActionType | addTaskActionType | chengeTaskTitleActionType | chengeIsDoneActionType


const initialState = {

}

export type TaskType = ServTaskType



export const TodolistReducer = (state: any = initialState, action: TodolistActionType) => {
    let newArrayTasks = [
        ...state[action.id] || []
    ]
    switch (action.type) {
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
        case 'CHENGE_IS_DONE':
            let arrayTasks = newArrayTasks.map(el => {
                if (el.id === action.taskId) {
                    return {
                        ...el,
                        status: action.payload
                    }
                }
                return el
            })
            return {
                ...state,
                [action.id]: [...arrayTasks]
            }
        case 'CHENGE_TASK_TITLE':
            let newArrayTaskTitle = newArrayTasks.map(el => {
                if (el.id === action.taskId) {
                    return {
                        ...el,
                        title: action.payload
                    }
                }
                return el
            })
            return {
                ...state,
                [action.id]: [...newArrayTaskTitle]
            }
        default:
            return state
    }
}