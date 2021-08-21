import axios from 'axios'
import {ReduxStoreProviderDecorator} from "../../.storybook/reduxStoreProviderDecorator";
import React, {useEffect, useState} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default {
    title: 'TodoList/Task',
    decorators: [ReduxStoreProviderDecorator],
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        "API-KEY": '9708f55c-7c56-4108-a0bf-76b37c22e7d1',
    }
})

const ShowElement: React.FC<any> = (props) => {
    return <List>
        {
            props.children && props.children.map((el: any, i: number) => {
                return <ListItem key={i}>{JSON.stringify(el)}</ListItem>
            })
        }
    </List>
}

const SetElement: React.FC<any> = (clickHendler) => {
    const [value, setValue] = useState('')
    const inputHendler = (e: any) => {
        setValue(e.target.value)
    }
    return <>
        <TextField onChange={inputHendler} value={value}/>
        <Button onClick={() => clickHendler(value)}>Add</Button>
    </>
}


export const getTodoList = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        instance.get(`/todo-lists/`)
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <ShowElement>{state}</ShowElement>
}



export const setTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todo, setTodo] = useState<any>(null)
    const newTodolist = (title: string) => {
        setTodo({title: title})
    }
    useEffect(() => {
        instance.post(`/todo-lists/`, todo)
            .then(res => {
                setState(res.data)
            })
    }, [todo])
    return <>
        <SetElement newTodolist={newTodolist}/>
        <ListItem>{JSON.stringify(state)}</ListItem>
    </>
}
