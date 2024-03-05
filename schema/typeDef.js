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

  type Movie{
    id: ID!
    name: String!
    publishedYear: Int!
    isInTheater: Boolean
  }


  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
  }

`;

module.exports = { typeDefs };
