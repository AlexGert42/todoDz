import React, {useState} from 'react';


export const InputSpan = ({text, onChengeTitleHendler}: any) => {

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
                <input onKeyPress={chengeInput} onChange={chengeText} value={newText} type="text"/>
            }
        </>
    )
}

