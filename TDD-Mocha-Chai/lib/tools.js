const https = require('https');

module.exports = {
// object literal enhancement ES6 Syntax
  printName(person) {
    return `${person.firstName}, ${person.lastName}`;
  },
  addNumber(a, b) {
    return a + b;
  },
  loadMyPage(person, callback) {
    const url = `https://en.wikipedia.org/wiki/${person.firstName}_${person.lastName}`;
    https.get(url, (res) => {
      let body = '';
      res.setEncoding('UTF-8');
      // Listen the data event
      res.on('data', (chunk) => {
        body += chunk;
      });
      // Listen the end
      res.on('end', () => {
        // Pass the wikipedia page to the callback function
        callback(body);
      });
    });
  },
};
