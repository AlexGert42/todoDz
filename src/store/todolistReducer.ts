import {
    removeTaskActionType,
    addTaskActionType,
    chengeTaskTitleActionType,
    chengeIsDoneActionType
} from "./todolistAction";
// import {v1} from "uuid";
// import {todoListId1, todoListId2} from "./createTodolistReducer";

type TodolistActionType = removeTaskActionType | addTaskActionType | chengeTaskTitleActionType | chengeIsDoneActionType


const initialState = {
    // [todoListId1]: [
    //     {id: v1(), title: 'HTML&CSS', isDone: true},
    //     {id: v1(), title: 'JS', isDone: true},
    //     {id: v1(), title: 'ReactJS', isDone: false},
    //     {id: v1(), title: 'Rest API', isDone: false},
    //     {id: v1(), title: 'GrphQL', isDone: false},
    // ],
    // [todoListId2]: [
    //     {id: v1(), title: 'Book', isDone: true},
    //     {id: v1(), title: 'Apple', isDone: true},
    //     {id: v1(), title: 'Milk', isDone: false},
    // ]
}

export type taskType = {
    id: string
    title: string
    isDone: boolean
}
// type stateType = {
//     todoListId1: taskType
//     todoListId2: taskType
// }


export const TodolistReducer = (state: any = initialState, action: TodolistActionType) => {
    let newArrayTasks = [
        ...state[action.id] || []
    ]
    switch (action.type) {
        case 'ADD_TASK':
            newArrayTasks.push(action.payload)
            return {
                ...state,
                [action.id]: [...newArrayTasks]
            }
        case 'REMOVE_TASK':
            newArrayTasks = newArrayTasks.filter(el => el.id !== action.taskId)
            return {
                ...state,
                [action.id]: [...newArrayTasks]
            }
        case 'CHENGE_IS_DONE':
            let arrayTasks = newArrayTasks.map(el => {
                if (el.id === action.taskId) {
                    return {
                        ...el,
                        isDone: !el.isDone
                    }
                }
                return el
            })
            return {
                ...state,
                [action.id]: [...arrayTasks]
            }
        case 'CHENGE_TASK_TITLE':
            let newArrayTaskTitle = newArrayTasks.map(el => {
                if (el.id === action.taskId) {
                    return {
                        ...el,
                        title: action.payload
                    }
                }
                return el
            })
            return {
                ...state,
                [action.id]: [...newArrayTaskTitle]
            }
        default:
            return state
    }
}