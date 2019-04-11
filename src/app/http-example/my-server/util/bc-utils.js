/**
 *  Utility functions
  */

 var dateTime = require('node-datetime');

 var ErrorCodes = require('./error-codes');
 /**
  *  For in clause for queries
  *
  * @param {*} query
  * @param {*} values
  * @param {*} next
  */
 var appendInValues = function (query, values, next) {

     if (values.length == 1) {
         query = query + " = '" + values[0] + "'";
     }
     else {

         query = query + " in (";

         var inValues = "";

         values.forEach(element => {
             // console.log('element : ' + element);
             inValues = inValues + "'" + element + "',";
         });

         inValues = inValues.replace(/,\s*$/, "");

         query = query + inValues + ")";
     }

     next(query);
 };

 /**
  * Create User-Defined Error Response.
  */
 var createError = function (message, next, info) {


     if (info) {
         message.info = info;
     }
     var response = response = {
         status: "ERROR",
         data: [],
         error_description: {},
         exception: {}

     };
     if (message) {
         response.error_description = message;
     }
     next(response);
 };

 /**
  * Build success response
  */
 var buildResponse = function (responseData, next) {

     /**
      * Common response format
      */
     var response = {
         status: "SUCCESS",
         data: [],
         error_description: {},
         exception: {}

     };

     if (responseData instanceof Array) {
         response.data = responseData;
     } else {
         response.data.push(responseData);
     }

     next(response);
 };

 /**
  * Build error response
  */
 var buildErrorResponse = function (error, next) {

     var response = {};

     if (!error.status) {//If not user-defined

         response = {
             status: "ERROR",
             data: [],
             error_description: {},
             exception: {}

         };

         if (error.error_description) {
             response.error_description = error.error_description;
         } else {
             response.error_description = ErrorCodes.operation_failed;
         }
         response.exception = error;
     } else {
         response = error;
     }

     next(response);
 };

 var getCurrentTime = function () {
     var dateFormat = 'm-d-Y I:M:S p';
     var currentTime = (dateTime.create()).format(dateFormat);
     return currentTime;
 };
 /**
  * Export functions
  */
 module.exports = {
     appendInValues: appendInValues,
     createError: createError,
     buildResponse: buildResponse,
     buildErrorResponse: buildErrorResponse,
     getCurrentTime: getCurrentTime
 };
