type initStateType = {
    isLoading: boolean
}

const initState: initStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            const newState = {...state, ...action.payload}
            return newState
        }
        default:
            return state
    }
}

type loadingACType = {
    type: 'CHANGE-LOADING'
    payload: { isLoading: boolean }
}

export const loadingAC = (isLoading: boolean): loadingACType => {
    return {
        type: 'CHANGE-LOADING',
        payload: {isLoading}
    }
}// fix any