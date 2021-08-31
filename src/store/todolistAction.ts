import {v1} from "uuid";
import {TaskType} from "./todolistReducer";
export type removeTaskActionType = {
    type: 'REMOVE_TASK'
    id: string
    taskId: string
}
export type addTaskActionType = {
    id: string
    type: 'ADD_TASK'
    payload: any
}
export type chengeTaskTitleActionType = {
    type: 'CHENGE_TASK_TITLE'
    id: string
    payload: string
    taskId: string
}
export type chengeIsDoneActionType = {
    type: 'CHENGE_IS_DONE'
    payload: number
    id: string
    taskId: string
}





export const addTaskTodolistAction = (id: string, title: string): addTaskActionType => {
    let newTask: TaskType = {
        id: v1(),
        title: title,
        status: 0,
        order: 0,

        addedDate: '',
        deadline: '',
        description: '',
        priority: 0,
        startDate: '',
        todoListId: '6546546'
    }
    return {
        type: 'ADD_TASK',
        payload: newTask,
        id,
    }
}

export const removeTaskTodolistAction = (id: string, taskId: string): removeTaskActionType => ({
    type: 'REMOVE_TASK',
    id,
    taskId,
})

export const chengeIsDoneTaskTodolistAction = (id: string, taskId: string, value: number): chengeIsDoneActionType => ({
    type: 'CHENGE_IS_DONE',
    payload: value,
    id,
    taskId,
})

export const chengeTitleTaskTodolistAction = (id: string, taskId: string, text: string): chengeTaskTitleActionType => ({
    type: 'CHENGE_TASK_TITLE',
    payload: text,
    id,
    taskId
})
