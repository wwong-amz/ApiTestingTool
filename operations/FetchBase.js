const fetch = require('node-fetch');

function fetchBase (url, apiOptions) {
  fetch(url, apiOptions)
  .then(res => res.json())
  .then(json => console.log(`${apiOptions.method}`, json))
}

module.exports = fetchBase;