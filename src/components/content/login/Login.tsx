import React from 'react';
import styles from './Login.module.scss';
import {
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    Paper,
    Switch,
    TextField
} from '@material-ui/core';
import {useFormik} from 'formik'
import {useSelector} from "react-redux";
import {useActions} from "../../../store/store";
import {Redirect} from "react-router-dom";
import {selectors} from '../../selectors'
import {appActions} from "../../../store";

export type DataLogin = {
    email: string
    password: string
    rememberMe?: string
    captcha?: boolean
}


export const Login: React.FC = () => {
    const auth = useSelector(selectors.authSelector)
    const {loginThunk} = useActions(appActions)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememderMe: false
        },
        validate: (values) => {
            if (!values.email.trim()) {
                return {email: 'Email is required'}
            }
            if (!values.password.trim()) {
                return {password: 'Password is required'}
            }
            if (values.password.trim().length < 8) {
                return {password: 'Password is less than 8 characters'}
            }
        },
        onSubmit: async (values) => {
            await loginThunk(values)
        },
    });


    if (auth) {
        return <Redirect to={'/todolist'}/>
    }

    return (
        <Grid container justify={"center"} alignItems={"center"}>
            <Paper className={styles.login} elevation={3}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>Login</FormLabel>
                        <FormGroup>
                            <TextField
                                label={'Email'}
                                name={'email'}
                                margin={"normal"}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email && <div>{formik.errors.email}</div>}
                            <TextField
                                label={'Password'}
                                margin={"normal"}
                                name={'password'}
                                // type={'password'}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.password && <div>{formik.errors.password}</div>}
                            <FormControlLabel
                                control={<Switch/>}
                                label={'Remamder Me'}
                                name={'rememberMe'}
                                value={formik.values.rememderMe}
                            />

                            <Button
                                disabled={formik.errors.email || formik.errors.password ? true : false}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >Send</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Paper>
        </Grid>
    )
}