const date = new Date()

const success = {

    OK_STATUS_200 : {
        message : "success",
        status : 200
    },

    CREATED_STATUS_201 : {
        message : "client created",
        status : 201
    },

    AUTHENTICATION_CREATED_STATUS_201 : {
        message : `token created at : ` + date,
        status : 201  
    }

}

export { success}