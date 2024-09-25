/**
 * USER related information
 */

import {UPDATE_TOKEN , USER_INFO, LOGGED_IN} from "../constants"; 

//update token action 
const updateToken = (token) => {
    return {
        type: UPDATE_TOKEN,
        payload: token
    }
}

//update the logged in user info
const updateUserInfo = (info) => {
    return {
        type: USER_INFO, 
        payload: info
    }
}

// update the status of the log in (if he is logged in => true , if not => false)
const updateLogStatus = (status) => {
    return {
        type: LOGGED_IN, 
        payload: status
    }
}


export {updateLogStatus, updateToken, updateUserInfo};
