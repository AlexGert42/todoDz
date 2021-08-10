import React, {useCallback} from 'react';
import {InputSpan} from "./InputSpan";
import {
    Checkbox,
    ListItem,
    Button,

} from '@material-ui/core';

import {taskType} from "../store/todolistReducer";



export type TaskPropsType = {
    id: string
    item: taskType
    removeTask: (id: string, task: string) => void
    chengeTaskTitle: (id: string, task: string, text: string) => void
    chengeIsDone: (id: string, task: string) => void
}


export const Task = React.memo(({id, item, removeTask, chengeTaskTitle, chengeIsDone}: TaskPropsType) => {

    const onChengeTaskTitleHendler = useCallback((text: string) => {
        chengeTaskTitle(id, item.id, text)
    }, [id, item.id])

    return (
        <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>

            <Checkbox
                onChange={() => chengeIsDone(id, item.id)}
                checked={item.isDone}
                color="secondary"
            />

            <InputSpan text={item.title} onChengeTitleHendler={onChengeTaskTitleHendler}/>

            <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeTask(id, item.id)}
            >X</Button>

        </ListItem>
    )
})
