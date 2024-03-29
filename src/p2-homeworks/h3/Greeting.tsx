import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    const disabledBtn = error ? true : false;

    return (
        <div>
            <div>
                <SuperInputText value={name} onChange={setNameCallback} onKeyUp={onKeyPressHandler} className={inputClass}/>

                <span className={s.textError}>{error}</span>
            </div>
            <SuperButton onClick={addUser} disabled={disabledBtn} > add </SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}
export default Greeting;
