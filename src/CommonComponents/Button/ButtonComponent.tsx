import React, {ChangeEvent, useState} from "react";
import style from './ButtonComponent.module.css'


type ButtonComponentPropsType = {
    setValue: () => void
    disabled?: boolean
}
export const ButtonComponent = (props: ButtonComponentPropsType) => {

    return (
        <button
            className={style.btn}
            onClick={props.setValue}
            disabled={props.disabled}
        >CLICK ME
        </button>
    )
}