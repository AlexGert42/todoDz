import {
    removeTaskActionType,
    addTaskActionType,
    setTasksType, updateTaskTodolistActionType
} from "./todolistAction";
import {ServTaskType} from "../../api/todoApi";


type TodolistActionType = removeTaskActionType | addTaskActionType | updateTaskTodolistActionType | setTasksType


const initialState = {

}

export type TaskType = ServTaskType



export const TodolistReducer = (state: any = initialState, action: TodolistActionType) => {
    let newArrayTasks = [
        ...state[action.id] || []
    ]
    switch (action.type) {

        case 'SET_TASK':
            return {
                ...state,
                [action.id]: [...action.payload]
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
        default:
            return state
    }
}