// import React from "react";

// const Context = React.createContext({
//     //registred token
//     token: "",
//     //user details
//     userInfo: "",
//     //log in status
//     isLoggedIn: false,
//     //patients data
//     document: {},
//     //mode 


// }); 


import { createStore, combineReducers } from 'redux';
import {authReducer, docReducer} from "./reducers";

// add all reducers here in the root
const rootReducer = combineReducers(
    { 
        token: authReducer.tokenReducer,
        userInfo: authReducer.userInfoReducer,
        isLoggedIn: authReducer.loginReducer, 
        mode: docReducer.modeReducer,
        docInfo: docReducer.docInfoReducer,
    }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export {configureStore};