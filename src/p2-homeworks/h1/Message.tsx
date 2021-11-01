import React from 'react'
import m from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: MessagePropsType) {
    return (
        <div className={m.message}>
            <img src={props.avatar} alt={'avatar'} className={m.ava}/>

            <div className={m.angle}/>

            <div className={m.content}>
                <div className={m.name}> {props.name} </div>
                <div className={m.mess}> {props.message} </div>
                <div className={m.time}> {props.time} </div>
            </div>
        </div>
    )
}

export default Message
