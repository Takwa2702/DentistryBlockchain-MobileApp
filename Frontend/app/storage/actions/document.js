import {DOCUMENT_INFO, DOC_MODE} from "../constants";

//store the current Document Info
const setDocInfo = (doc) => {
    return {
        type: DOCUMENT_INFO,
        payload: doc
    }
}


//store the mode of the document if its on create or idle 
const setDocMode = (mode) => {
    return {
        type: DOC_MODE, 
        payload: mode
    }
}

export {setDocInfo, setDocMode};