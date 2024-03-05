const fs = require('fs');
const _ = require('lodash');

let usersData = null;
let moviesData = null;
if (!usersData) {
  fs.readFile('src/data/users.json', 'utf-8', (err, data) => {
    if (err) { throw new Error(err.message); }
    usersData = JSON.parse(data);
  });
}

if (!moviesData) {
  fs.readFile('src/data/movies.json', 'utf-8', (err, data) => {
    if (err) { throw new Error(err.message); }
    moviesData = JSON.parse(data);
  });
}

const resolvers = {
  Query: {
    users() {
      return usersData;
    },
    user(parent, args) {
      const { id } = args;
      const user = _.find(usersData, { id: Number(id) });
      return user;
    },
    movies() {
      return moviesData;
    },
  },
};

module.exports = { resolvers };