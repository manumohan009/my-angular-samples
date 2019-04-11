/**
 * Response handling module
 */

var bcUtils = require('./bc-utils');

/**
 * Success Response handling logic
 */
var handleSuccess = function (response, httpResponse) {

    console.log('********************* response **************************************');
    console.log(response);

    bcUtils.buildResponse(response, (result) => {
        httpResponse.send(result);
    });
};


/**
 * Error Response handling logic
 */
var handleError = function (error, httpResponse) {
    // response = error;
    // httpResponse.json(error);

    bcUtils.buildErrorResponse(error, (response) => {
        httpResponse.send((response));
    });

};

/**
 * Export Functions
 */

module.exports = {
    handleSuccess: handleSuccess,
    handleError: handleError
}
