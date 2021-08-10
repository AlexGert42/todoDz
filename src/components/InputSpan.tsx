import React, {useCallback, useState} from 'react';
import {TextField} from "@material-ui/core";


export const InputSpan = React.memo( ({text, onChengeTitleHendler}: any) => {
    console.log('InputSpan')
    const [flag, setFlag] = useState(true)
    const [newText, setNewText] = useState(text)

    const chengeSpan = () => setFlag(false)
    const chengeText = (e: any) => setNewText(e.target.value)

    const chengeInput = (e: any) => {
        if (e.charCode === 13 && newText.trim()) {
            onChengeTitleHendler(newText)
            setFlag(true)
        }
    }


    return (
        <>
            {flag ?
                <span onDoubleClick={chengeSpan}>{newText}</span>
                :
                <TextField onKeyPress={chengeInput} onChange={chengeText} value={newText} type="text"/>
            }
        </>
    )
})

