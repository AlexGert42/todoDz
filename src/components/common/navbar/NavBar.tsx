import {useActions} from "../../../store/store";
import {todolistActions} from "../../../store";
import React, {useCallback} from "react";
import {Drawer, Grid} from "@material-ui/core";
import {ItemForm} from "../index";

type NavBarPropsType = {
    show: boolean
    setValue: (value: boolean) => void
}

export const NavBar = ({show, setValue}: NavBarPropsType) => {

    const {addTodolistThunk} = useActions(todolistActions)

    const addTodoList = useCallback((value: string) => {
        addTodolistThunk(value)
    }, [])

    return (
        <Drawer
            anchor={'left'}
            hideBackdrop={false}
            onClose={() => setValue(false)}
            open={show}
        >
            <Grid container spacing={10}>
                <ItemForm.AddItemForm addTask={addTodoList}/>
            </Grid>
        </Drawer>
    )
}

