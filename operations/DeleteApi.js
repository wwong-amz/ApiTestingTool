const fetchBase = require('./FetchBase');
const apiOptionsFactory = require('../utils/apiOptionsFactory');


function deleteApi(apiKey, baseUrl, deleteString) {
  const url = baseUrl + deleteString;
  const apiOptions = apiOptionsFactory(apiKey, 'DELETE')

  fetchBase(url, apiOptions)
}

module.exports = deleteApi;