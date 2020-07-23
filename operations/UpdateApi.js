const apiOptionsFactory = require('../utils/apiOptionsFactory');
const fetchBase = require('./FetchBase');


function updateApi (apiKey, baseUrl, endpoint, body) {
  const url = baseUrl + endpoint;
  const apiOptions = apiOptionsFactory(apiKey, 'PUT', body);

  fetchBase(url, apiOptions);
}

module.exports = updateApi;