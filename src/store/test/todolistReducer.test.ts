// import {v1} from "uuid";
// import {AppReducer} from "../todolistReducer";
// import {TaskType} from "../../components/AddItemForm";
// import {
//     addTaskTodolistAction,
//     chengeIsDoneTaskTodolistAction,
//     chengeTitleTaskTodolistAction,
//     removeTaskTodolistAction
// } from "../todolistAction";
//
//
// test('Todolist correct todolist add task', () => {
//
//     let todoListId1 = v1()//
//     let todoListId2 = v1()//
//     const testState: any = {
//         [todoListId1]: [
//             {id: v1(), title: 'HTML&CSS', isDone: true},
//             {id: v1(), title: 'JS', isDone: true},
//             {id: v1(), title: 'ReactJS', isDone: false},
//             {id: v1(), title: 'Rest API', isDone: false},
//             {id: v1(), title: 'GrphQL', isDone: false},
//         ],
//         [todoListId2]: [
//             {id: v1(), title: 'Book', isDone: true},
//             {id: v1(), title: 'Apple', isDone: true},
//             {id: v1(), title: 'Milk', isDone: false},
//         ]
//     }
//
//
//     const endState = AppReducer(testState, addTaskTodolistAction(todoListId1, 'testTask'))
//     console.log(endState)
//     expect(endState[todoListId1][5].title).toBe('testTask')
//
// })
// /////////////////////////////////////////////////////////////////////
// test('Todolist correct todolist remove task', () => {
//
//     const taskId = v1()
//     let todoListId1 = v1()//
//     let todoListId2 = v1()//
//     const testState: any = {
//         [todoListId1]: [
//             {id: v1(), title: 'HTML&CSS', isDone: true},
//             {id: v1(), title: 'JS', isDone: true},
//             {id: taskId, title: 'ReactJS', isDone: false},
//             {id: v1(), title: 'Rest API', isDone: false},
//             {id: v1(), title: 'GrphQL', isDone: false},
//         ],
//         [todoListId2]: [
//             {id: v1(), title: 'Book', isDone: true},
//             {id: v1(), title: 'Apple', isDone: true},
//             {id: v1(), title: 'Milk', isDone: false},
//         ]
//     }
//
//     const endState = AppReducer(testState, removeTaskTodolistAction(todoListId1, taskId))
//     console.log(endState)
//     expect(endState[todoListId1].length).toBe(4)
// })
// ///////////////////////////////////////////////////////////////////////
// test('Todolist correct todolist chenge isDone task', () => {
//     const taskId = v1()
//     let todoListId1 = v1()//
//     let todoListId2 = v1()//
//     const testState: any = {
//         [todoListId1]: [
//             {id: taskId, title: 'HTML&CSS', isDone: true},
//             {id: v1(), title: 'JS', isDone: true},
//             {id: v1(), title: 'ReactJS', isDone: false},
//             {id: v1(), title: 'Rest API', isDone: false},
//             {id: v1(), title: 'GrphQL', isDone: false},
//         ],
//         [todoListId2]: [
//             {id: v1(), title: 'Book', isDone: true},
//             {id: v1(), title: 'Apple', isDone: true},
//             {id: v1(), title: 'Milk', isDone: false},
//         ]
//     }
//
//     const endState = AppReducer(testState, chengeIsDoneTaskTodolistAction(todoListId1, taskId))
//     console.log(endState)
//     expect(endState[todoListId1][0].isDone).toBe(false)
// })
// ///////////////////////////////////////////////////////////////////////////////
// test('Todolist correct todolist chenge task title', () => {
//     const taskId = v1()
//     let todoListId1 = v1()//
//     let todoListId2 = v1()//
//     const testState: any = {
//         [todoListId1]: [
//             {id: taskId, title: 'HTML&CSS', isDone: true},
//             {id: v1(), title: 'JS', isDone: true},
//             {id: v1(), title: 'ReactJS', isDone: false},
//             {id: v1(), title: 'Rest API', isDone: false},
//             {id: v1(), title: 'GrphQL', isDone: false},
//         ],
//         [todoListId2]: [
//             {id: v1(), title: 'Book', isDone: true},
//             {id: v1(), title: 'Apple', isDone: true},
//             {id: v1(), title: 'Milk', isDone: false},
//         ]
//     }
//
//     const endState = AppReducer(testState, chengeTitleTaskTodolistAction(todoListId1, taskId, 'test' ))
//     console.log(endState)
//     expect(endState[todoListId1][0].title).toBe('test')
// })