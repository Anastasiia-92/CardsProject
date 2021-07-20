import React, {ChangeEvent, useState} from "react";
import style from './CheckboxComponent.module.css'


type CheckboxComponentPropsType = {
    disabled?: boolean
}



export const CheckboxComponent = (props: CheckboxComponentPropsType) => {

    const [check, setCheck] = useState(false)

    let setCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
    }

    return (
        <label>
            <input
                type={'checkbox'}
                className={style.checkboxComponent}
                onChange={setCheckHandler}
            />
            <span className={style.text}>{check ? 'You checked me :)' : 'Check me!'}</span>
        </label>
    )
}