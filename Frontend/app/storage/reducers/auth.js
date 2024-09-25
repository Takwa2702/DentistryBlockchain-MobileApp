import {UPDATE_TOKEN, USER_INFO, LOGGED_IN} from "../constants";

const loginInit = {
    isLoggedIn:false
} 

const tokenInit = {
    token: "NO TOKEN YET"
}

const userInfoInit = {
    id: "-",
    firstName: "--",
    lastName: "-",
    email: "-",
    mobile: ""
}

//update token reducer
const tokenReducer = (state = tokenInit, action) => {
    switch(action.type) {
    case UPDATE_TOKEN:
        return {
            ...state,
            token:action.payload
        };
    default:
    return state;
    }
}

//store user information reducer
const userInfoReducer = (state = userInfoInit, action) => {
    switch(action.type) {
        case USER_INFO: 
            return {
                ...state, 
                userInfo: action.payload
            };
        default:
            return state;
    }
}

//store the status of the login in boolean
const loginReducer = (state = loginInit, action) => {
    switch(action.type) {
        case LOGGED_IN: 
            return {
                ...state, 
                isLoggedIn: action.payload
            }
        default: 
            return state;
    }
}

export {loginReducer, userInfoReducer, tokenReducer};