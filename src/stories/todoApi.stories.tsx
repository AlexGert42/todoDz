import {ReduxStoreProviderDecorator} from "../../.storybook/reduxStoreProviderDecorator";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {TaskApi, TodolistApi} from "../api/todoApi";
import {TodoListType} from "../store/todolist/todolistReducer";
import React, { useEffect, useState } from "react";


export default {
    title: 'TodoList/api',
    decorators: [ReduxStoreProviderDecorator],
}


// const ShowElement = (state: any) => {
//     if (!state) {
//         return
//     }
//     return <List>
//         {
//             state.children && state.children.map((el: any, i: number) => {
//                 return <ListItem key={i}>{JSON.stringify(el)}</ListItem>
//             })
//         }
//     </List>
// }
//
// export const getTodoListS = () => {
//
//     const [state, setState] = useState<Array<TodoListType>>([])
//
//     useEffect(() => {
//         TodolistApi.getTodolist().then((res: any) => {
//             setState(res.data)
//         })
//     }, [])
//
//     return <ShowElement>{state}</ShowElement>
// }
//
//
// export const setTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     //
//     const [todo, setTodo] = useState<any>('')
//     const [value, setValue] = useState('')
//     const inputHendler = (e: any) => setValue(e.target.value)
//
//
//     useEffect(() => {
//         TodolistApi.setTodolist(todo)
//             .then(res => {
//                 setState(res)
//             })
//     }, [todo])
//
//
//
//     return <>
//         <TextField onChange={inputHendler} value={value}/>
//         <Button onClick={() => setTodo(value)}>Add</Button>
//         <ListItem>{JSON.stringify(state)}</ListItem>
//         {getTodoListS()}
//     </>
// }
//
//
// export const deleteTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     //
//     const [id, setId] = useState<any>('')
//     const [value, setValue] = useState('')
//     const inputHendler = (e: any) => setValue(e.target.value)
//
//
//     useEffect(() => {
//         TodolistApi.deleteTodolist(id)
//             .then(res => {
//                 setState(res)
//             })
//     }, [])
//
//
//     return <>
//         <TextField onChange={inputHendler} value={value}/>
//         <Button onClick={() => setId(value)}>Add</Button>
//         <ListItem>{JSON.stringify(state)}</ListItem>
//         {getTodoListS()}
//     </>
// }
//
//
// export const updateTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     //
//     const [value_1, setValue_1] = useState('')
//     const [value_2, setValue_2] = useState('')
//
//     const [update, setUpdate] = useState({id: value_1, title: value_2})
//
//
//     const formHendler = () => {
//         setUpdate({
//             id: value_1,
//             title: value_2
//         })
//     }
//
//     useEffect(() => {
//         TodolistApi.updateTodolist(update.id, update.title)
//             .then(res => {
//                 setState(res)
//             })
//     }, [update])
//
//     return <>
//
//         <TextField onChange={e => setValue_1(e.target.value)} value={value_1}/><br/>
//         <TextField onChange={e => setValue_2(e.target.value)} value={value_2}/><br/>
//         <Button onClick={formHendler}>Add</Button>
//         <ListItem>{JSON.stringify(state)}</ListItem>
//         {getTodoListS()}
//     </>
// }
//
// export const addTask = () => {
//     const [state, setState] = useState<any>(null)
//     const [id, setId] = useState('')
//     const [title, setTitle] = useState('')
//
//     const [addTask, setAddTask] = useState({
//         id: '',
//         title: ''
//     })
//
//     const formHendler = () => {
//         setAddTask({
//             id,
//             title
//         })
//     }
//
//     useEffect(() => {
//         TaskApi.setTask(id, title).then((res: any) => {
//             console.log(res)
//             setState(res)
//         })
//     }, [addTask])
//
//     return <>
//         <TextField onChange={e => setId(e.target.value)} value={id}/><br/>
//         <TextField onChange={e => setTitle(e.target.value)} value={title}/><br/>
//         <Button onClick={formHendler}>Add</Button>
//         <ListItem>{JSON.stringify(state)}</ListItem>
//     </>
// }
