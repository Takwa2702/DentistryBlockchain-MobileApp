import {DOCUMENT_INFO, DOC_MODE} from "../constants";

const docModeInit = {
    docMode:false
} 


const docInfoInit = {
    id: "-",
    createdDate: "--",
    modifiedDate: "-",
    ownedBy: "-",
    patientDetails: {},
    medicines: [],
    issues: []
}

//update Doc Mode reducer
const modeReducer = (state = docModeInit, action) => {
    switch(action.type) {
    case DOC_MODE:
        return {
            ...state,
            docMode:action.payload
        };
    default:
    return state;
    }
}

//store user information reducer
const docInfoReducer = (state = docInfoInit, action) => {
    switch(action.type) {
        case DOCUMENT_INFO: 
            return {
                ...state, 
                docInfo: action.payload
            };
        default:
            return state;
    }
}


export {modeReducer, docInfoReducer, docInfoInit };