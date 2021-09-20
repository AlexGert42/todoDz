
import {StateTaskType, TasksReducer, TaskType, addTaskTodolistAction, removeTaskTodolistAction, updateTaskTodolistAction} from "../store/tasks/tasksReducer";



let startState: StateTaskType = {
    ['todolist1']: [
        {
            id: 'id:1',
            title: 'test1',
            status: 2,
            order: 0,
            addedDate: '',
            deadline: '',
            description: '',
            priority: 0,
            startDate: '',
            todoListId: 'todolist1',
            statusProcess: ''
        },
        {
            id: 'di:2',
            title: 'test2',
            status: 2,
            order: 0,
            addedDate: '',
            deadline: '',
            description: '',
            priority: 0,
            startDate: '',
            todoListId: 'todolist2',
            statusProcess: ''
        }
    ],
    ['todolist2']: [
        {
            id: 'di:22',
            title: 'test22',
            status: 2,
            order: 0,
            addedDate: '',
            deadline: '',
            description: '',
            priority: 0,
            startDate: '',
            todoListId: 'todolist2',
            statusProcess: ''
        }
    ]
}



test('correct add task', () => {
    const task: TaskType = {
        id: 'di:3',
        title: 'HTML&CSS_test',
        status: 2,
        order: 0,
        addedDate: '',
        deadline: '',
        description: '',
        priority: 0,
        startDate: '',
        todoListId: '6546546',
        statusProcess: ''
    }

    const action = addTaskTodolistAction({id: 'todolist1', newTodolist: task})

    const endState = TasksReducer(startState, action)

    console.log(endState)
    expect(endState['todolist1'].length).toBe(3)
})


test('correct remove task', () => {

    const action = removeTaskTodolistAction({id: 'todolist1', taskId: 'id:1'})

    const endState = TasksReducer(startState, action)

    console.log(endState)
    expect(endState['todolist1'].length).toBe(1)
})




test('correct chenge title todolist', () => {
    const chengeTask: any = {
        id: 'di:1',
        title: 'chengeTest',
    }

    const action = updateTaskTodolistAction({id: 'todolist1', taskId: 'id:1', task: chengeTask })

    const endState = TasksReducer(startState, action)

    expect(endState['todolist1'][0].title).toBe('chengeTest')
})


