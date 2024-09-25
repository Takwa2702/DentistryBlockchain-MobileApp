import axios from "axios"; 
import {config} from "../.config";

const coreApi = {

    //get documents by owner 
    getDocuments: ()=> axios({
        baseURL: config.API_URL,
        url: config.API_ENDPOINTS.DOCUMENT_ADD,
        method: "GET",
        // headers: {"x-access-token": params.token},
    }).then( response => {return response.data}).catch(err => {return err}),

    //create a new document
    //args (tokne, ownedBy)
    createDocument: (params) => axios({
        baseURL: config.API_URL,
        url: config.API_ENDPOINTS.DOCUMENT_ADD,
        method: "POST",
        // headers: {"x-access-token": params.token},
        data: {
            ownedBy: params.id
        }
    }).then( response => {return response.data}).catch(err => {return err}),


    //delete a document
    deleteDocument: (params) => axios({
        baseURL: config.API_URL,
        url: config.API_ENDPOINTS.DOCUMENT_GET + params.id,
        method: "DELETE",
        headers: {"x-access-token": params.token},
    }).then( response => {return response.data}).catch(err => {return err}),

    //get a document
    getDocument: (params) => axios({
        baseURL: config.API_URL,
        url: config.API_ENDPOINTS.DOCUMENT_GET + params.id,
        method: "GET",
        // headers: {"x-access-token": params.token},
    }).then( response => {return response.data}).catch(err => {return err}),


    //update a document
    updatePatient: (params) => axios({
        baseURL: config.API_URL,
        url: config.API_ENDPOINTS.DOCUMENT_GET + params.id + config.API_ENDPOINTS.DOCUMENT_PATIENT,
        method: "PATCH",
        // headers: {"x-access-token": params.token},
        data: params.data
    }).then( response => {return response.data}).catch(err => {return err}),


    //save patient
    savePatient: (params) => axios({
        baseURL: config.API_URL,
        url: config.API_ENDPOINTS.DOCUMENT_GET + params.id + config.API_ENDPOINTS.DOCUMENT_PATIENT,
        method: "POST",
        // headers: {"x-access-token": params.token},
        data: params.data
    }).then( response => {return response.data}).catch(err => {return err}),

    //get medicines 
    getMedicines: () => axios({
        baseURL: config.API_URL,
        url: config.API_ENDPOINTS.MEDICINE_GET_ALL,
        method: "GET",
        // headers: {"x-access-token": params.token},
    }).then( response => {return response.data}).catch(err => {return err}),


    //add medicine 
    addMedicine: (params) =>  axios({
        baseURL: config.API_URL,
        url: config.API_ENDPOINTS.DOCUMENT_GET + params.id + config.API_ENDPOINTS.DOCUMENT_MEDICINE,
        method: "POST",
        data: {
            medicineId: params.medicineId
        }
        // headers: {"x-access-token": params.token},
    }).then( response => {return response.data}).catch(err => {return err}),

    //remove medicine 
    deleteMedicine: (params) =>  axios({
        baseURL: config.API_URL,
        url: config.API_ENDPOINTS.DOCUMENT_GET + params.id + config.API_ENDPOINTS.DOCUMENT_MEDICINE,
        method: "DETELE",
        params: {
            medicineId: params.medicineId
        }
        // headers: {"x-access-token": params.token},
    }).then( response => {return response.data}).catch(err => {return err}),


    //get Issues 


}

export {coreApi};