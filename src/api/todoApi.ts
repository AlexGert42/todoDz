import axios from 'axios'

import {DataLogin} from "../components/content/login/Login";


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


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        "API-KEY": '9708f55c-7c56-4108-a0bf-76b37c22e7d1',
    }
})


export const TodolistApi = {
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

export const TaskApi = {
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






export const LoginApi = {
    authMe() {
        return instance.get('/auth/me').then(res => res.data)
    },
    login(data: DataLogin) {
        return instance.post('/auth/login', {...data}).then(res => res.data)
    },
    logout() {
        return instance.delete('/auth/login').then(res => res.data)
    }
}


