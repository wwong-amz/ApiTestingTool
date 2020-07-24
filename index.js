// DOTENV
require('dotenv').config();

// FETCH FUNCTION
const fetchWrapper = require('./operations/FetchWrapper');
const testStatusCode = require('./tests/testStatusCode');


// ENVIRONMENT VARIABLES
const STAGE = process.env.STAGE;
const AWS_REGION = process.env.AWS_REGION;
const API_ID_TEST = process.env.API_ID_TEST;
const API_ID_PROD = process.env.API_ID_PROD;
const API_KEY_TEST = process.env.API_KEY_TEST;
const API_KEY_PROD = process.env.API_KEY_PROD;

// ENDPOINTS
const CREATE_ENDPOINT = 'create';
const UPDATE_ENDPOINT = 'update';

// PATH PARAMS & QUERY STRINGS
const TEST_ITEM_ID_BAD_REQUEST = 'test-0002-DAPI-CPD-device-001';
const TEST_ITEM_ID_NOT_FOUND = 'test-0002-DAPI-CPD-device-0002';
const QUERY_STRING_BAD_REQUEST = 'device?groupId=alpha&deviceType=quit';
const DELETE_STRING_BAD_REQUEST = 'delete?deviceId=test-0002-DAPI-CPD-device-001';
const DELETE_STRING_NOT_FOUND = 'delete?deviceId=test-0002-DAPI-CPD-device-0002';

// REQUEST BODIES
const CREATE_REQUEST_BODY_BAD_REQUEST = `{
  "deviceId": "test-0002-DAPI-CPD-device-0002"
}`;
const UPDATE_REQUEST_BODY_CONFLICT = `{
  "deviceId": "test-0002-DAPI-CPD-device-0001",
  "status": "connected"
}`;
const UPDATE_REQUEST_BODY_BAD_REQUEST = `{
  "deviceId": "test-0002-DAPI-CPD-device-0001"
}`

const UPDATE_REQUEST_BODY_NOT_FOUND = `{
  "deviceId": "test-0002-DAPI-CPD-device-0003",
  "status": "connected"
}`



const BASE_URL = `https://${API_ID_TEST}.execute-api.${AWS_REGION}.amazonaws.com/${STAGE}/`


async function invokeOperations (apiKey) {

  const getBadRequest = await fetchWrapper(apiKey, BASE_URL, TEST_ITEM_ID_BAD_REQUEST, 'GET');
  console.log('Is Get BadRequest Status Code Correct',testStatusCode(getBadRequest, 400));

  const getNotFound = await fetchWrapper(apiKey, BASE_URL, TEST_ITEM_ID_NOT_FOUND, 'GET');
  console.log('Is Get NotFound Status Code Correct', testStatusCode(getNotFound, 404));

  const deleteBadRequest = await fetchWrapper(apiKey, BASE_URL, DELETE_STRING_BAD_REQUEST, 'DELETE');
  console.log('Is Delete BadRequest Status Code Correct', testStatusCode(deleteBadRequest, 400));

  const deleteNotFound = await fetchWrapper(apiKey, BASE_URL, DELETE_STRING_NOT_FOUND, 'DELETE');
  console.log('Is Delete NotFound Status Code Correct', testStatusCode(deleteNotFound, 404));

  const queryBadRequest = await fetchWrapper(apiKey, BASE_URL, QUERY_STRING_BAD_REQUEST, 'GET');
  console.log('Is Query BadRequest Status Code Correct', testStatusCode(queryBadRequest, 400));

  const createBadRequest = await fetchWrapper(apiKey, BASE_URL, CREATE_ENDPOINT, 'POST', CREATE_REQUEST_BODY_BAD_REQUEST);
  console.log('Is Create BadRequest Status Code Correct', testStatusCode(createBadRequest, 400));

  const updateConflict = await fetchWrapper(apiKey, BASE_URL, UPDATE_ENDPOINT, 'PUT', UPDATE_REQUEST_BODY_CONFLICT);
  console.log('Is Update Conflict Status Code Correct', testStatusCode(updateConflict, 409));

  const updateBadRequest = await fetchWrapper(apiKey, BASE_URL, UPDATE_ENDPOINT, 'PUT', UPDATE_REQUEST_BODY_BAD_REQUEST);
  console.log('Is Update BadRequest Status Code Correct', testStatusCode(updateBadRequest, 400));

  const updateNotFound = await fetchWrapper(apiKey, BASE_URL, UPDATE_ENDPOINT, 'PUT', UPDATE_REQUEST_BODY_NOT_FOUND);
  console.log('Is Update NotFound Status Code Correct', testStatusCode(updateNotFound, 404));

} 

invokeOperations(API_KEY_TEST);