import {getTodolistThunk, addTodolistThunk, removeTodolistThunk, chengeNameTodolistThunk, chengeFilterTodolistAction } from './todolist/todolistReducer';
import {addTaskThunk, removeTaskThunk, updateTaskThunk, getTaskThunk} from './tasks/tasksReducer';
import {loginThunk, authMeThunk, logoutThunk, removeAlertAction} from './app/appReducer'

export const todolistActions = {
    getTodolistThunk, addTodolistThunk, removeTodolistThunk, chengeNameTodolistThunk, chengeFilterTodolistAction
}
export const tasksActions = {
    addTaskThunk, removeTaskThunk, updateTaskThunk, getTaskThunk
}
export const appActions = {
    loginThunk, authMeThunk, logoutThunk, removeAlertAction
}

