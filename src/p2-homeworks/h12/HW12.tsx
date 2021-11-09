import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some', 'lemon', 'green'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useSelector<AppStoreType, string>(state => state.colorTheme.colorTheme)
    const dispatch = useDispatch();

    // useDispatch, onChangeCallback

    const onChangeCallback = (themes: string) => {
        if (themes === 'dark') {
            dispatch({type: "CHANGE-ON-DARK"}) //когда диспатчю actionCreator ругается что надо использовать redux-thunk
        }
        if (themes === 'red') {
            dispatch({type: "CHANGE-ON-RED"})
        }
        if (themes === 'some') {
            dispatch({type: "CHANGE-ON-SOME"})
        }
        if (themes === 'lemon') {
            dispatch({type: "CHANGE-ON-LEMON"})
        }
        if (themes === 'green') {
            dispatch({type: "CHANGE-ON-GREEN"})
        }

    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect
                options={themes}
                onChangeOption={onChangeCallback}
            />

            <hr/>
        </div>
    );
}

export default HW12;
