// DOTENV
require('dotenv').config();

// FETCH FUNCTION
const fetchWrapper = require('./operations/FetchWrapper');


// ENVIRONMENT VARIABLES
const STAGE = process.env.STAGE;
const AWS_REGION = process.env.AWS_REGION;
const API_ID_TEST = process.env.API_ID_TEST;
const API_ID_PROD = process.env.API_ID_PROD;
const API_KEY_TEST = process.env.API_KEY_TEST;
const API_KEY_PROD = process.env.API_KEY_PROD;
const TEST_ITEM_ID = process.env.TEST_ITEM_ID;
const QUERY_STRING = process.env.QUERY_STRING;
const DELETE_STRING = process.env.DELETE_STRING;
const CREATE_REQUEST_BODY = process.env.CREATE_REQUEST_BODY;
const UPDATE_REQUEST_BODY = process.env.UPDATE_REQUEST_BODY;
const CREATE_ENDPOINT = process.env.CREATE_ENDPOINT;
const UPDATE_ENDPOINT = process.env.UPDATE_ENDPOINT;


const BASE_URL = `https://${API_ID_TEST}.execute-api.${AWS_REGION}.amazonaws.com/${STAGE}/`


function invokeOperations (apiKey) {
  fetchWrapper(apiKey, BASE_URL, TEST_ITEM_ID, 'GET');
  fetchWrapper(apiKey,BASE_URL, DELETE_STRING, 'DELETE');
  fetchWrapper(apiKey, BASE_URL, QUERY_STRING, 'GET');
  fetchWrapper(apiKey, BASE_URL, CREATE_ENDPOINT, 'POST', CREATE_REQUEST_BODY);
  fetchWrapper(apiKey, BASE_URL, UPDATE_ENDPOINT, 'PUT', UPDATE_REQUEST_BODY)
}

invokeOperations(API_KEY_TEST);