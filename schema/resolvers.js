// const data = require('../data.json');
const fs = require('fs');

let jsonData = null;
fs.readFile('data.json', 'utf-8', (err, data) => {
  if (err) { throw new Error(err.message); }
  jsonData = JSON.parse(data);
});

const resolvers = {
  Query: {
    users() {
      return jsonData;
    },
  },
};

module.exports = { resolvers };