const error = {
  BAD_REQUEST_ERROR_400: {
    message: 'happen a error with a 404 status, it´s a bad request',
    status: 400,
  },

  NOT_FOUND_ERROR_404: {
    message: 'happen a error with a 404 status, it`s a not found error, not found on the database',
    status: 404,
  },

  CONFLICT_ERROR_409: {
    message: 'happen a error conflict in the database with the HTTP status code 409',
    status: 409,
  },

  PASSWORD_CONFLICT_MATCH_409: {
    message: 'happen a conflict with the password with the HTTP status code 409',
    status: 409,
  },

  INTERNAL_ERROR_500: {
    messege: 'happen a error on the server with the HTTP status code 500',
    status: 500,
  },

  UNAUTHORIZED_ERROR_401: {
    message: 'happen to authorize the client, use the token',
    status: 401,
  },
};

export { error };
