type initStateType = {
    colorTheme: string
}

const initState: initStateType = {
    colorTheme: 'dark'
};

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-ON-DARK": {
            return {colorTheme: 'dark'};
        }
        case "CHANGE-ON-RED": {
            return {colorTheme: 'red'};
        }
        case "CHANGE-ON-SOME": {
            return {colorTheme: 'some'};
        }
        case "CHANGE-ON-LEMON": {
            return {colorTheme: 'lemon'};
        }
        case "CHANGE-ON-GREEN": {
            return {colorTheme: 'green'};
        }
        default:
            return state;
    }
};

type ActionType = ChangeThemeDarkACType | ChangeThemeRedACType |
    ChangeThemeSomeACType | ChangeThemeLemonACType | ChangeThemeGreenACType;

type ChangeThemeDarkACType = {
    type: 'CHANGE-ON-DARK'
}
type ChangeThemeRedACType = {
    type: 'CHANGE-ON-RED'
}
type ChangeThemeSomeACType = {
    type: 'CHANGE-ON-SOME'
}
type ChangeThemeLemonACType = {
    type: 'CHANGE-ON-LEMON'
}
type ChangeThemeGreenACType = {
    type: 'CHANGE-ON-GREEN'
}

export const changeThemeDarkAC = (): ChangeThemeDarkACType => {
    return {
        type: "CHANGE-ON-DARK"
    }
};
export const changeThemeRedAC = (): ChangeThemeRedACType => {
    return {
        type: "CHANGE-ON-RED"
    }
};
export const changeThemeSomeAC = (): ChangeThemeSomeACType => {
    return {
        type: "CHANGE-ON-SOME"
    }
};