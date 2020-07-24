
function testStatusCode(actualStatusCode, expectedStatusCode) {
  if (actualStatusCode === expectedStatusCode) {
    return true;
  }
  console.log(`Error: status code should be ${expectedStatusCode} but you got`, actualStatusCode);
  return false
}

module.exports = testStatusCode;