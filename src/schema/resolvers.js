const fs = require('fs');
const _ = require('lodash');

let jsonData = null;
fs.readFile('src/data/users.json', 'utf-8', (err, data) => {
  if (err) { throw new Error(err.message); }
  jsonData = JSON.parse(data);
});

const resolvers = {
  Query: {
    users() {
      return jsonData;
    },
    user(parent, args) {
      const { id } = args;
      const user = _.find(jsonData, { id: Number(id) });
      return user;
    },
  },
};

module.exports = { resolvers };