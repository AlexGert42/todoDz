import {
    TaskType,
    setTaskTodolistAction,
    addTaskTodolistAction,
    setDisabledAction,
    removeTaskTodolistAction,
    updateTaskTodolistAction
} from "./tasksReducer";
import {Dispatch} from "redux";
import {TaskApi, TaskPriorities, TaskStatuses} from "../../api/todoApi";
import {AppRootState} from "../store";
import {configAlert} from "../app/appAction";
import {setAlertAction} from "../app/appReducer";


export const getTaskThunk = (id: string) => (dispatch: Dispatch) => {
    TaskApi.getTask(id)
        .then((res: any) => {
            if (res.status === 200) {
                dispatch(setTaskTodolistAction({tasks: res.data.items, id}))
            }
        })
        .catch(error => {
            dispatch(setAlertAction({alert: configAlert('error', error.message)}))
        })
}

export const addTaskThunk = (id: string, title: string) => (dispatch: Dispatch) => {
    TaskApi.setTask(id, title)
        .then((res: any) => {
            if (res.resultCode === 0) {
                dispatch(addTaskTodolistAction({id: res.data.item.todoListId, newTask: res.data.item}))
                dispatch(setAlertAction({alert: configAlert('success', `Создан Task: ${title}`)}))
            }
        })
        .catch(error => {
            dispatch(setAlertAction({alert: configAlert('error', error)}))
        })
}

export const removeTaskThunk = (id: string, taskId: string) => (dispatch: Dispatch, getState: () => AppRootState) => {
    const state = getState()
    const item = state.tasks[id].find(el => el.id === taskId)

    if (!item) {
        return
    }

    dispatch(setDisabledAction({id, taskId, value: 'loading'}))
    TaskApi.deleteTask(id, taskId)
        .then((res: any) => {
            if (res.resultCode === 0) {
                dispatch(removeTaskTodolistAction({id, taskId}))
                dispatch(setAlertAction({alert: configAlert('success', `Удален Task: ${item.title}`)}))

            }
        })
        .catch(error => {
            dispatch(setAlertAction({alert: configAlert('error', error)}))
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


export const updateTaskThunk = (id: string, taskId: string, model: ModelType) => (dispatch: Dispatch, getState: () => AppRootState) => {

    const state = getState()

    const task = state.tasks[id].find((el: ModelType) => el.id === taskId)
    if (!task) {
        return
    }

    const update = Object.keys(model).join(' ')


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
        statusProcess: task.statusProcess,
        ...model
    }

    dispatch(setDisabledAction({id, taskId, value: 'chengeStatus'}))

    TaskApi.updateTask(id, taskId, apiModel)
        .then((res: any) => {
            if (res.resultCode === 0) {
                dispatch(updateTaskTodolistAction({id, taskId, task: apiModel}))
                dispatch(setAlertAction({alert: configAlert('success', `Изменен ${update} Task: ${task.title}`)}))
                dispatch(setDisabledAction({id, taskId, value: ''}))
            }
        })
        .catch(error => {
            dispatch(setAlertAction({alert: configAlert('error', error)}))
        })
}