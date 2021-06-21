import {v1} from "uuid";


export const addTaskTodolistAction = (id: string, title: string) => {
    let newTask = {
        id: v1(),
        title: 'testTask',
        isDone: false
    }
    return {
        type: 'ADD_TASK',
        payload: newTask,
        id,
    }
}

export const removeTaskTodolistAction = (id: string, taskId: string) => ({
    type: 'REMOVE_TASK',
    id,
    taskId,
})

export const chengeIsDoneTaskTodolistAction = (id: string, taskId: string) => ({
    type: 'CHENGE_IS_DONE',
    id,
    taskId,
})

export const chengeTitleTaskTodolistAction = (id: string, taskId: string, text: string) => ({
    type: 'CHENGE_TASK_TITLE',
    payload: text,
    id,
    taskId
})
