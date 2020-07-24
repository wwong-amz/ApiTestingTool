const fetch = require('node-fetch');

function fetchBase (url, apiOptions) {
  return fetch(url, apiOptions)
  .then(res => res.status)
}

module.exports = fetchBase;