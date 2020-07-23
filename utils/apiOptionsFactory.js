
function apiOptionsFactory(apiKey, method, body) {
  const apiOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey
    }
  }
  if (body) {
    return {
      ...apiOptions,
      body
    }
  }
  return apiOptions
}

module.exports = apiOptionsFactory;