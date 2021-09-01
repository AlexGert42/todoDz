import {TaskType} from "./todolistReducer";
import {Dispatch} from "redux";
import {TaskApi, TaskPriorities, TaskStatuses} from "../../api/todoApi";
import {AppRootState} from "../store";

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
export type updateTaskTodolistActionType = {
    type: 'CHENGE_TASK'
    id: string
    payload: TaskType
    taskId: string
}

export type setTasksType = {
    type: 'SET_TASK',
    payload: TaskType[],
    id: string
}


export const setTaskTodolistAction = (tasks: TaskType[], id: string): setTasksType => ({
    type: 'SET_TASK',
    payload: tasks,
    id: id
})

export const addTaskTodolistAction = (id: string, newTask: string): addTaskActionType => ({
    type: 'ADD_TASK',
    payload: newTask,
    id,
})


export const removeTaskTodolistAction = (id: string, taskId: string): removeTaskActionType => ({
    type: 'REMOVE_TASK',
    id,
    taskId,
})


export const updateTaskTodolistAction = (id: string, taskId: string, task: TaskType): updateTaskTodolistActionType => ({
    type: 'CHENGE_TASK',
    payload: task,
    id,
    taskId
})


export const getTaskThunk = (id: string) => (dispatch: Dispatch) => {
    TaskApi.getTask(id)
        .then((res: any) => {
            if (res.status === 200) {
                dispatch(setTaskTodolistAction(res.data.items, id))
            }

        })
}

export const addTaskThunk = (id: string, title: string) => (dispatch: Dispatch) => {
    TaskApi.setTask(id, title)
        .then((res: any) => {
            if (res.resultCode === 0) {
                dispatch(addTaskTodolistAction(res.data.item.todoListId, res.data.item))
            }
        })
}

export const removeTaskThunk = (id: string, idTask: string) => (dispatch: Dispatch) => {
    TaskApi.deleteTask(id, idTask)
        .then((res: any) => {
            if (res.resultCode === 0) {
                dispatch(removeTaskTodolistAction(id, idTask))
            }

        })
}


/////////////////////////////////////////////////////
type ModelType = {
    addedDate?: string
    deadline?: string | null
    description?: string | null
    id?: string
    order?: number
    priority?: TaskPriorities
    startDate?: string | null
    status?: TaskStatuses
    title?: string
    todoListId?: string
}


export const updateTaskThunk = (id: string, idTask: string, model: ModelType) => (dispatch: Dispatch, getState: () => AppRootState) => {

    const state = getState()

    const task = state.tasks[id].find((el: ModelType) => el.id === idTask)
    if (!task) {
        return
    }
    const apiModel: TaskType = {
        id: task.id,
        title: task.title,
        addedDate: task.addedDate,
        description: task.description,
        priority: task.priority,
        order: task.order,
        startDate: task.startDate,
        todoListId: task.todoListId,
        deadline: task.deadline,
        status: task.status,
        ...model
    }

    TaskApi.updateTask(id, idTask, apiModel)
        .then((res: any) => {
            if (res.resultCode === 0) {
                dispatch(updateTaskTodolistAction(id, idTask, apiModel))
            }

        })
}