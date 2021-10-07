import {
    TodoListType,
    TodolistReducer,
    chengeFilterTodolistAction,
    addTodolistThunk, removeTodolistThunk, chengeNameTodolistThunk
} from "../store/todolist/todolistReducer"

let startState: Array<TodoListType>[] = []
    beforeEach(() => {
    startState = [
        {
            id: 'id:1',
            title: 'test1',
            addedDate:'11:39:30',
            order: 1,
            filter: 'complete',
            entiryStatus: ''
        },
        {
            id: 'id:2',
            title: 'test2',
            addedDate:'11:49:38',
            order: 1,
            filter: 'all',
            entiryStatus: ''
        },
    ]
})



test('correct create todolist', () => {
    const todolist: TodoListType = {
        id: 'id:3',
        title: 'test3',
        addedDate:'13:39:30',
        order: 1,
        filter: 'all',
        entiryStatus: ''
    }

    const action = addTodolistThunk.fulfilled({newTodolist: todolist}, 'requestId', {newTodolist: todolist})

    const endState = TodolistReducer(startState, action)

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe('test3')
})


test('correct remove todolist', () => {

    const action = removeTodolistThunk.fulfilled({idTodolist: 'id:1'}, 'requestId', {idTodolist: 'id:1'})

    const endState = TodolistReducer(startState, action)

    expect(endState.length).toBe(1)
    expect(endState[0].title).toBe('test2')
})


test('correct chenge title todolist', () => {
    const action = chengeNameTodolistThunk.fulfilled({idTodolist: 'id:1', newTitleTodolist: 'chengeTest'}, 'requestId', {newTitleTodolist: 'chengeTest'})

    const endState = TodolistReducer(startState, action)

    expect(endState[0].title).toBe('chengeTest')
})


test('correct chenge filter todolist', () => {

    const action = chengeFilterTodolistAction({idTodolist: 'id:1', newfilterTodolist: 'active'})

    const endState = TodolistReducer(startState, action)

    expect(endState[0].filter).toBe('active')
})