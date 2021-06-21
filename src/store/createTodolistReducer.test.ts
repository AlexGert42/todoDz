import {TodoListType} from "../components/CreateTodoList";
import {v1} from "uuid";
import {CreateTodolistReducer} from "./createTodolistReducer";
import {
    addTodolistAction,
    chengeFilterTodolistAction,
    chengeTitleTodolistAction,
    removeTodolistAction
} from "./createTodolistAction";

export const REMOVE_TODOLIST = 'REMOVE_TODOLIST'
export const ADD_TODOLIST = 'ADD_TODOLIST'
export const CHENGE_NAME_TODOLIST = 'CHENGE_NAME_TODOLIST'
export const CHENGE_FILTER_TODOLIST = 'CHENGE_FILTER_TODOLIST'


test('CreateTodolist Correct Remove Todolist', () => {
    let todoListId1 = v1()
    let todoListId2 = v1()
    let todoListId3 = v1()
    let todoListId4 = v1()

    let testState: Array<TodoListType> = [
        {id: todoListId1, title: 'block1', filter: 'all'},
        {id: todoListId2, title: 'block2', filter: 'all'},
        {id: todoListId3, title: 'block3', filter: 'all'},
        {id: todoListId4, title: 'block4', filter: 'all'},
    ]

    const endState = CreateTodolistReducer(testState, removeTodolistAction(todoListId3))

    expect(endState.length).toBe(testState.length - 1)
    expect(endState[2].id).toBe(todoListId4)
})


test('CreateTodolist Correct ADD Todolist', () => {


    let testState: Array<TodoListType> = [
        {id: v1(), title: 'block1', filter: 'all'},
        {id: v1(), title: 'block2', filter: 'all'},
    ]



    const endState = CreateTodolistReducer(testState, addTodolistAction('New todolist'))

    console.log(endState)
    expect(endState.length).toBe(testState.length + 1)
    expect(endState[2].title).toBe('New todolist')
})


test('CreateTodolist Correct ChengeName Todolist', () => {
    let newName = 'newNameBlock'
    let todoListId1 = v1()

    let testState: Array<TodoListType> = [
        {id: todoListId1, title: 'block1', filter: 'all'},
        {id: v1(), title: 'block2', filter: 'all'},
    ]

    const endState = CreateTodolistReducer(testState, chengeTitleTodolistAction(todoListId1, newName))
    expect(endState[0].title).toBe('newNameBlock')


})

test('CreateTodolist Correct Chenge Filter Todolist', () => {
    let newFilter = 'active'
    let todoListId1 = v1()

    let testState: Array<TodoListType> = [
        {id: todoListId1, title: 'block1', filter: 'all'},
        {id: v1(), title: 'block2', filter: 'all'},
    ]

    const endState = CreateTodolistReducer(testState, chengeFilterTodolistAction(todoListId1, newFilter))
    console.log(endState)
    expect(endState[0].filter).toBe('active')
})

