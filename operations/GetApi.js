const fetchBase = require('./FetchBase');
const apiOptionsFactory = require('../utils/apiOptionsFactory');


function getApi(apiKey, baseUrl, itemId) {
  const url = baseUrl + itemId
  const apiOptions = apiOptionsFactory(apiKey, 'GET');

  fetchBase(url, apiOptions)
}

module.exports = getApi;