import React, {ChangeEvent, useState} from "react";
import style from './InputComponent.module.css'
import {ButtonComponent} from "../Button/ButtonComponent";


type InputComponentPropsType = {}
export const InputComponent = () => {

    let [text, setText] = useState("")
    let [error, setError] = useState(false)
    // let [error, setError] = useState<string | null>(null)

    let onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
        setError(false)
    }

    let setValue = () => {
        if (text.trim() !== "") {
            alert(text);
            setText("")
            setError(false)
        } else {
            setError(true);
        }
    }

    return (
        <>
            <input
                value={text}
                onChange={onChangeInputHandler}
                className={style.inputComponent}
            />
            {error && <div className={style.inputError}>You cant add the empty form :(</div>}
            <ButtonComponent
                setValue={setValue}
                disabled={error}
            />
        </>
    )
}