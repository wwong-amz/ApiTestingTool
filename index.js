// DOTENV
require('dotenv').config();

// FETCH FUNCTIONS
const getApi = require('./operations/GetApi');
const queryApi = require('./operations/QueryApi');
const createApi = require('./operations/CreateApi');
const updateApi = require('./operations/UpdateApi');
const deleteApi = require('./operations/DeleteApi');

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
  getApi(apiKey, BASE_URL, TEST_ITEM_ID);
  deleteApi(apiKey, BASE_URL, DELETE_STRING);
  queryApi(apiKey, BASE_URL, QUERY_STRING);
  createApi(apiKey, BASE_URL, CREATE_ENDPOINT, CREATE_REQUEST_BODY);
  updateApi(apiKey, BASE_URL, UPDATE_ENDPOINT, UPDATE_REQUEST_BODY);
}

invokeOperations(API_KEY_TEST);