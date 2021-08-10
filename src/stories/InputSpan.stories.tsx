import React from 'react';
import {InputSpan} from "../components/InputSpan";
import {Provider} from "react-redux";
import {store} from "../store/store";


export default {
    title: 'TodoList/InputSpan',
    component: InputSpan
}

let args = {
    text: 'gdfgdhgfjhg'
}

const Template = (args: any) => {


    return <Provider store={store}>
        <InputSpan {...args}/>
    </Provider>
}


export const inputSpan1 = Template.bind(args)