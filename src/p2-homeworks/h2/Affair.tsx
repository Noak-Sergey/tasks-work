import React from 'react'
import {AffairType} from "./HW2";
import m from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={m.affair}>
            <div className={m.name}>{props.affair.name}</div>
            <div className={m.priority}>{props.affair.priority}</div>
            <SuperButton onClick={deleteCallback} className={m.button} >X</SuperButton>
        </div>
    )
}

export default Affair
