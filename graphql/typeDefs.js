const { gql } = require("apollo-server");

module.exports = gql`
  type masterItem {
    id: ID!
    itemNumber: String!
    description: String!
    descriptionShort: String!
    perCase: Int!
    zoneA: String!
  }
  type Query {
    getMasterItems: [masterItem]
  }
  # type Mutation {

  # }
  # type Subscription {
      
  # }
`;
