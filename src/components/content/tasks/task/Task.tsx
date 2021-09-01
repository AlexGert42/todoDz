import React, {useCallback} from 'react';
import {InputSpan} from "../../input/InputSpan";
import {
    Checkbox,
    ListItem,
    Button,

} from '@material-ui/core';

import {TaskType} from "../../../../store/tasks/todolistReducer";



export type TaskPropsType = {
    id: string
    item: TaskType
    removeTask: (id: string, task: string) => void
    chengeTaskTitle: (id: string, task: string, text: string) => void
    chengeIsDone: (id: string, task: string, status: number) => void
}


export const Task = React.memo(({id, item, removeTask, chengeTaskTitle, chengeIsDone}: TaskPropsType) => {

    const onChengeTaskTitleHendler = useCallback((text: string) => {
        chengeTaskTitle(id, item.id, text)
    }, [id, item.id])

    return (
        <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>

            <Checkbox
                onChange={() => chengeIsDone(id, item.id, (item.status === 0) ? 2 : 0)}
                checked={item.status === 2}
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
