import {ReduxStoreProviderDecorator} from "../../.storybook/reduxStoreProviderDecorator";
import React, {useEffect, useState} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {TodolistApi} from "./todoApi";


export default {
    title: 'TodoList/api',
    decorators: [ReduxStoreProviderDecorator],
}


const ShowElement: React.FC<any> = (props) => {
    return <List>
        {
            props.children && props.children.map((el: any, i: number) => {
                return <ListItem key={i}>{JSON.stringify(el)}</ListItem>
            })
        }
    </List>
}

const SetElement: React.FC<any> = (hendler: any) => {
    console.log(hendler)
    const [value, setValue] = useState('')
    const inputHendler = (e: any) => {
        setValue(e.target.value)
    }
    const clickHendler = () => {
        hendler(value)
    }
    return <>
        <TextField onChange={inputHendler} value={value}/>
        <Button onClick={clickHendler}>Add</Button>
    </>
}


export const getTodoList = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        TodolistApi.getTodolist().then(res => {
            setState(res)
        })
    }, [])
    return <ShowElement>{state}</ShowElement>
}


export const setTodolist = () => {
    const [state, setState] = useState<any>(null)
    //
    const [todo, setTodo] = useState<any>('')
    const [value, setValue] = useState('')
    const inputHendler = (e: any) => setValue(e.target.value)


    useEffect(() => {
        TodolistApi.setTodolist(todo)
            .then(res => {
                setState(res)
            })
    }, [todo])


    return <>
        <TextField onChange={inputHendler} value={value}/>
        <Button onClick={() => setTodo(value)}>Add</Button>
        <ListItem>{JSON.stringify(state)}</ListItem>
        {getTodoList()}
    </>
}


export const deleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    //
    const [id, setId] = useState<any>('')
    const [value, setValue] = useState('')
    const inputHendler = (e: any) => setValue(e.target.value)


    useEffect(() => {
        TodolistApi.deleteTodolist(id)
            .then(res => {
                setState(res)
            })
    }, [])


    return <>
        <TextField onChange={inputHendler} value={value}/>
        <Button onClick={() => setId(value)}>Add</Button>
        <ListItem>{JSON.stringify(state)}</ListItem>
        {getTodoList()}
    </>
}


export const updateTodolist = () => {
    const [state, setState] = useState<any>(null)
    //
    const [value_1, setValue_1] = useState('')
    const [value_2, setValue_2] = useState('')

    const [update, setUpdate] = useState({id: value_1, title: value_2})


    const formHendler = () => {
        setUpdate({
            id: value_1,
            title: value_2
        })
    }

    useEffect(() => {
        TodolistApi.updateTodolist(update.id, update.title)
            .then(res => {
                setState(res)
            })
    }, [update])

    return <>

        <TextField onChange={e => setValue_1(e.target.value)} value={value_1}/><br/>
        <TextField onChange={e => setValue_2(e.target.value)} value={value_2}/><br/>
        <Button onClick={formHendler}>Add</Button>
        <ListItem>{JSON.stringify(state)}</ListItem>
        {getTodoList()}
    </>
}
