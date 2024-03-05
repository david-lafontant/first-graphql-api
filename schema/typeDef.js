const { gql } = require('apollo-server');

const typeDefs = gql`

  type User{
    id: ID! 
    name: String!
    email: String!
    age: Int
    isMarried: Boolean
    nationality: String!
  }


  type Query {
    users: [User!]!
  }
`;

module.exports = { typeDefs };
