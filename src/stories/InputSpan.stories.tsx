import React from 'react';
import {InputSpan} from "../components/InputSpan";
// @ts-ignore
import {action} from '@storybook/addon-actions';
import {ReduxStoreProviderDecorator} from "../../.storybook/reduxStoreProviderDecorator";


export default {
    title: 'TodoList/InputSpan',
    component: InputSpan,
    decorators: [ReduxStoreProviderDecorator]
}

const onChengeTitleHendler = action('onChengeTitleHendler')

const args_1 = {
    text: 'test_1 ',
    onChengeTitleHendler
}
const args_2 = {
    text: 'test_2 ',
    onChengeTitleHendler
}

export const TaskBaseExample = () => {
    return (
        <>
            <InputSpan text={args_1.text} onChengeTitleHendler={args_1.onChengeTitleHendler}/>
            <InputSpan text={args_2.text} onChengeTitleHendler={args_2.onChengeTitleHendler}/>
        </>
    )
}