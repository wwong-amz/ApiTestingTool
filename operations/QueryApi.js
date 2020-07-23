const apiOptionsFactory = require('../utils/apiOptionsFactory');
const fetchBase = require('./FetchBase');


function queryApi(apiKey, baseUrl, queryString) {
  const url = baseUrl + queryString;
  const apiOptions = apiOptionsFactory(apiKey, 'GET');
  
  fetchBase(url, apiOptions)
}

module.exports = queryApi