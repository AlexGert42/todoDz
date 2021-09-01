import axios from 'axios'

export type ServTodoListType = {
    id: string
    title: string
    addedDate: string
    order: number
}

export type ServTaskType = {
    addedDate: string
    deadline: string | null
    description: string | null
    id: string
    order: number
    priority: TaskPriorities
    startDate: string | null
    status: TaskStatuses
    title: string
    todoListId: string
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Complite = 2,
    Draft = 3
}


type ApiTodolistMethodType = {
    getTodolist: () => Promise<object>
    setTodolist: (newTitle: string) => Promise<object>
    deleteTodolist: (id: string) => Promise<object>
    updateTodolist: (id: string, newTitle: string) => Promise<object>
    reorderTodolist: (id: string, order: number) => Promise<object>
}
type ApiTaskMethodType = {
    getTask: (id: string) => Promise<object>
    setTask: (id: string, newTitle: string) => Promise<object>
    deleteTask: (idL: string, idT: string) => Promise<object>
    updateTask: (idL: string, idT: string, title: any) => Promise<object>
    reorderTask: (idL: string, idT: string, order: number) => Promise<object>
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        "API-KEY": '9708f55c-7c56-4108-a0bf-76b37c22e7d1',
    }
})


export const TodolistApi: ApiTodolistMethodType = {
    getTodolist() {
        return instance.get(`/todo-lists`).then(res => res)
    },
    setTodolist(newTitle: string) {
        return instance.post(`/todo-lists`, {title: newTitle}).then(res => res.data)
    },
    deleteTodolist(id: string) {
        return instance.delete(`/todo-lists/${id}`).then(res => res.data)
    },
    updateTodolist(id: string, newTitle: string) {
        return instance.put(`/todo-lists/${id}`, {title: newTitle}).then(res => res.data)
    },
    reorderTodolist(id: string, order: number) {
        return instance.put(`/todo-lists/${id}`, {order: order}).then(res => res.data)
    },

}

export const TaskApi: ApiTaskMethodType = {
    getTask(idList: string) {
        return instance.get(`/todo-lists/${idList}/tasks`).then(res => res)
    },
    setTask(idList: string, newTitle: string) {
        return instance.post(`/todo-lists/${idList}/tasks`, {title: newTitle}).then(res => res.data)
    },
    deleteTask(idList: string, idTask: string) {
        return instance.delete(`/todo-lists/${idList}/tasks/${idTask}`).then(res => res.data)
    },
    updateTask(idList: string, idTask: string, newTask: any) {
        return instance.put(`/todo-lists/${idList}/tasks/${idTask}`, newTask).then(res => res.data)
    },
    reorderTask(idList: string, idTask: string, order: number) {
        return instance.put(`/todo-lists/${idList}/tasks/${idTask}`, {orer: order}).then(res => res.data)
    }
}


