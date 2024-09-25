//making the api calls here
import axios from "axios";
import {config} from "../.config";

const authApi = {

    //sign in
    signIn: (params) => axios({
        baseURL: config.API_URL,
        url: config.API_ENDPOINTS.SIGNIN,
        method: "POST",
        data: {
            email: params.email,
            password: params.password
        }
    }).then( response => {return response.data}).catch(err => {console.log(err); return err}),

    //#TODO SignUp
}

export {authApi};