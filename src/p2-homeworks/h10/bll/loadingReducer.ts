type initStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state: initStateType = initState, action: LoadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return { ...state, ...action.payload}
        }
        default:
            return state
    }
}

type LoadingACType = {
    type: 'CHANGE-LOADING'
    payload: { isLoading: boolean }
}

export const loadingAC = (isLoading: boolean): LoadingACType => {
    return {
        type: "CHANGE-LOADING",
        payload: {isLoading}
    }
} // fix any