const response_codes = require('../../constants/response_codes')

const responeObject = (status, success, data, error, message, rest) => {
    return {
        status: {
            code: status,
            success: success,
        },
        data: data,
        message: message ? message : '',
        error: error,
        ...rest
    };
};

const failedAuthentication = (res, message) => {
    res.status(response_codes.unAuthorized).send(
        responeObject(response_codes.unAuthorized, false, null, {
            message: message ? message : response_codes.unAuthorized,
        })
    );
}

const forbidden = (res, message) => {
    res.status(response_codes.forbidden).send(
        responeObject(response_codes.forbidden, false, null, {
            message: message ? message : response_codes.forbidden,
        })
    );
}

const successResponse = (res, data, message, rest) => {
    res
        .status(response_codes.success)
        .send(responeObject(response_codes.success, true, data, null, message ? message : '', {...rest}));
};

const errorResponse = (res, error, message) => {
    res
        .status(response_codes.error)
        .send(responeObject(response_codes.error, false, null, error, message));
};
const userDoesNotExists = (res, error, message) => {
    res
        .status(response_codes.not_found)
        .send(responeObject(response_codes.not_found, false, null, error, message));
};

module.exports = {
    failedAuthentication,
    forbidden,
    successResponse,
    userDoesNotExists,
    errorResponse
}