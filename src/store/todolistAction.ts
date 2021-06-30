import {v1} from "uuid";
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
    id: string
    taskId: string
}





export const addTaskTodolistAction = (id: string, title: string): addTaskActionType => {
    let newTask = {
        id: v1(),
        title: title,
        isDone: false
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

export const chengeIsDoneTaskTodolistAction = (id: string, taskId: string): chengeIsDoneActionType => ({
    type: 'CHENGE_IS_DONE',
    id,
    taskId,
})

export const chengeTitleTaskTodolistAction = (id: string, taskId: string, text: string): chengeTaskTitleActionType => ({
    type: 'CHENGE_TASK_TITLE',
    payload: text,
    id,
    taskId
})
