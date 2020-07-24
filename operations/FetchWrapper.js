const apiOptionsFactory = require("../utils/apiOptionsFactory");
const fetchBase = require("./FetchBase");

function fetchWrapper(apiKey, baseUrl, endpoint, method, body) {
  const url = baseUrl + endpoint;
  const apiOptions = apiOptionsFactory(apiKey, method, body);

  return fetchBase(url, apiOptions);
}

module.exports = fetchWrapper;