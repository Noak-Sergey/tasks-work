import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useState} from "react";
import {requestAPI} from "./requestAPI";



export function Request() {

    const[chekboxOnOff, setCheckboxOnOff] = useState(false)
    const[request, setRequest] = useState('Push button')

    function sendRequest(chekboxOnOff: boolean) {
        requestAPI.post(chekboxOnOff)
            .then((res) => {
                if(res === undefined) {
                    setRequest('эмитация ошибки на сервере')
                } else {
                    setRequest(res)
                }
            })
    }

    return (
        <div>
            <SuperButton onClick={ () => sendRequest(chekboxOnOff) }>request</SuperButton>
            <SuperCheckbox onClick={() => setCheckboxOnOff(!chekboxOnOff)}/>
            <div>
                {request}
            </div>
        </div>)
}