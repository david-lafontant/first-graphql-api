const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/typeDef');
const { resolvers } = require('./schema/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => { console.log('Api is active in: ', url); });
