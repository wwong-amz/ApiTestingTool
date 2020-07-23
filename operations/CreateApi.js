const fetchBase = require('./FetchBase');
const apiOptionsFactory = require('../utils/apiOptionsFactory');


function createApi(apiKey, baseUrl, endPoint, body) {
  const url = baseUrl + endPoint; 
  const apiOptions = apiOptionsFactory(apiKey, 'POST', body)

  fetchBase(url, apiOptions)
}

module.exports = createApi