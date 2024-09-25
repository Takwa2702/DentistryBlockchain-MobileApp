const config = {
    //api
    API_URL: "http://localhost:6060/api",
    API_ENDPOINTS: {
        SIGNIN: "/auth/login",
        SINGUP: "/auth/register",

        USER_DETAILS: "/users/",

        //Medicine 
        MEDICINE_ADD: "/medicine",
        MEDICINE_GET: "/medicine/",
        MEDICINE_GET_ALL: "/medicine",
        
        //Department
        DEPARTMENT_ADD: "/department",
        DEPARTMENT_GET: "/department/",
        DEPARTMENT_GET_ALL: "/department",
        
        //Patient
        PATIENT_GET: "/patient/",
        PATIENT_GET_ALL: "/patient",

        //Issue
        ISSUE_ADD: "/issue",
        ISSUE_GET: "/issue/",
        ISSUE_GET_ALL: "/issue",

        //Patient Document
        DOCUMENT_ADD: "/document",
        DOCUMENT_GET: "/document/",
        DOCUMENT_PATIENT: "/patient",
        DOCUMENT_MEDICINE: "/medicine",
        DOCUMENT_ISSUE: "/issue",
    }
}

export {config};