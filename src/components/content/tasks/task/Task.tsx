import React, {useCallback} from 'react';
import style from './Task.module.scss'
import {Input} from "../../../common";
import {Button, Checkbox, CircularProgress, ListItem,} from '@material-ui/core';

import {TaskType} from "../../../../store/tasks/tasksReducer";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';


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
        <ListItem className={style.task}>
            <div className={style.task__discription}>
                {
                    item.statusProcess === 'chengeStatus' ?
                        <CircularProgress className={style.task__loader} size={30}/>
                        :
                        item.status === 2 ?
                            <button
                                className={style.task__btn}
                                disabled={item.statusProcess === 'loading'}
                                onClick={() => chengeStatus(id, item.id, (item.status === 0) ? 2 : 0)}
                            >
                                <CheckIcon/>
                            </button>
                            :
                            <Checkbox
                                className={style.task__checkbox}
                                disabled={item.statusProcess === 'loading'}
                                onChange={() => chengeStatus(id, item.id, (item.status === 0) ? 2 : 0)}
                                color="secondary"
                            />
                }
                <div className={style.task__input}>
                    <Input.InputSpan text={item.title} onChengeTitleHendler={onChengeTaskTitleHendler}/>
                </div>
            </div>
            <Button
                variant="outlined"
                disabled={item.statusProcess === 'loading'}
                onClick={() => removeTask(id, item.id)}
                color={'secondary'}
            >
                <DeleteIcon/>
            </Button>
        </ListItem>
    )
})
