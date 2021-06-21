import {TaskType} from "../components/AddItemForm";
import {FilterValuesType} from "../components/CreateTodoList";


type removeTaskActionType = {
    type: 'REMOVE_TASK'
    id: string
    taskId: string
}
type addTaskActionType = {
    id: string
    type: 'ADD_TASK'
    payload: any
}
type chengeTaskTitleActionType = {
    type: 'CHENGE_TASK_TITLE'
    id: string
    payload: string
    taskId: string
}
type chengeIsDoneActionType = {
    type: 'CHENGE_IS_DONE'
    id: string
    taskId: string
}
type TodolistActionType = removeTaskActionType | addTaskActionType | chengeTaskTitleActionType | chengeIsDoneActionType



export const TodolistReducer = (state: any, action: TodolistActionType) => {
    let newArrayTasks = [...state[action.id]]
    switch (action.type) {
        case 'ADD_TASK':
            newArrayTasks.push(action.payload)
            return {
                ...state,
                [action.id]: newArrayTasks
            }
        case 'REMOVE_TASK':
            newArrayTasks = newArrayTasks.filter(el => el.id !== action.taskId)
            return {
                ...state,
                [action.id]: newArrayTasks
            }
        case 'CHENGE_IS_DONE':
            newArrayTasks.find(el => {
                if (el.id === action.taskId) {
                    el.isDone = !el.isDone
                }
            })
            return {
                ...state,
                [action.id]: newArrayTasks
            }
        case 'CHENGE_TASK_TITLE':
            newArrayTasks.find(el => {
                if (el.id === action.taskId) {
                    el.title = action.payload
                }
            })
            return {
                ...state,
                [action.id]: newArrayTasks
            }
        default:
            state
    }
}