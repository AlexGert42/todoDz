import React, {useCallback} from 'react';
import {InputSpan} from "../../input/InputSpan";
import {
    Checkbox,
    ListItem,
    Button,
    CircularProgress,

} from '@material-ui/core';

import {TaskType} from "../../../../store/tasks/tasksReducer";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import {Icon} from '@material-ui/core';


export type TaskPropsType = {
    id: string
    item: TaskType
    removeTask: (id: string, task: string) => void
    chengeTaskTitle: (id: string, task: string, text: string) => void
    chengeStatus: (id: string, task: string, status: number) => void
}


export const Task = React.memo(({id, item, removeTask, chengeTaskTitle, chengeStatus}: TaskPropsType) => {


    const onChengeTaskTitleHendler = useCallback((text: string) => {
        chengeTaskTitle(id, item.id, text)
    }, [id, item.id])

    return (
        <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>
            {
                item.statusProcess === 'chengeStatus' ?
                    <CircularProgress size={28}/>
                    :
                    item.status === 2 ?
                        <Button
                            disabled={item.statusProcess === 'loading'}
                            onClick={() => chengeStatus(id, item.id, (item.status === 0) ? 2 : 0)}
                        >
                            <CheckIcon/>
                        </Button>
                        :
                        <Checkbox
                            disabled={item.statusProcess === 'loading'}
                            onChange={() => chengeStatus(id, item.id, (item.status === 0) ? 2 : 0)}
                            color="secondary"
                        />
            }


            <InputSpan text={item.title} onChengeTitleHendler={onChengeTaskTitleHendler}/>
            <Button
                variant="outlined"
                disabled={item.statusProcess === 'loading'}
                onClick={() => removeTask(id, item.id)}
            >
                <DeleteIcon/>
            </Button>
        </ListItem>
    )
})
