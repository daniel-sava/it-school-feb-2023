import { createContext, useReducer } from "react";

export const UserProfileContext = createContext(null);

export const USER_ACTIONS = {
    LOG_IN: 'login',
    LOG_OUT: 'logout',
    CHANGE_USERNAME: 'change-username'
}

const userProfileReducer = (state, action) => {
    switch(action.type) {
        case USER_ACTIONS.LOG_IN:
            return {
                userName: 'IT School Student',
                skills: ['HTML', 'CSS', 'JS', 'React']
            }
        case USER_ACTIONS.LOG_OUT:
            return {};
        case USER_ACTIONS.CHANGE_USERNAME:
            return {...state, userName: action.payload.userName}
        default:
            return state;
    }
}

export default function UserProfileContextProvider(props) {
    const [user, dispatch] = useReducer(userProfileReducer, {});

    return (
        <UserProfileContext.Provider value={{ user, dispatch }}>
            {props.children}
        </UserProfileContext.Provider>
    )
}