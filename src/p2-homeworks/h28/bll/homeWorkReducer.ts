import {initialPeople, UserType} from "../HW8";

type ACType = {
    type: string,
    payload: string
}

type ActionType = ACType

export const homeWorkReducer = (state: UserType[] = initialPeople, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const copyState = [...state]
            const newState = copyState.sort(function (a, b) {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if(nameA < nameB) return -1
                if(nameA > nameB) return 1
                return 0
            })
            // need to fix
            return newState
        }
        case 'sortD': {
            const copyState = [...state]
            const alphabet = copyState.sort(function (a, b) {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if(nameA < nameB) return -1
                if(nameA > nameB) return 1
                return 0
            })
            const newState = alphabet.reverse()
            // need to fix
            return newState
        }
        case 'check': {
            const copyState = [...state]
            const newState = copyState.filter((u) => u.age >= 18)
            // need to fix
            return newState
        }
        default:
            return state
    }
}
