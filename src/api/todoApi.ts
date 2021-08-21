
import axios from 'axios'



const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        "API-KEY": '9708f55c-7c56-4108-a0bf-76b37c22e7d1',
    }
})


export const TodoApi = {
    getTodolist() {
        return instance.get(`/todo-lists`).then(res => {
            console.log(res)
        })
    },
    setTodolist(title: string) {
        return instance.post(`/todo-lists`, {title: title}).then(res => {
            console.log(res)
        })
    }
}


