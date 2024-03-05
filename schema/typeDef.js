const { gql } = require('apollo-server');

const typeDefs = gql`

  type User{
    id: ID! 
    name: String!
    email: String!
    age: Int
    isMarried: Boolean
    nationality: String!
    friends: [User]
  }


  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

`;

module.exports = { typeDefs };
