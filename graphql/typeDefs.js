const { gql } = require("apollo-server");

module.exports = gql`
  type MasterItem {
    id: ID!
    itemNumber: String!
    description: String!
    descriptionShort: String!
    perCase: Int!
    casPerTier: Int!
    casPerPallet: Int!
    caseWidth: Int!
    caseDepth: Int!
    caseHeight: Int!
    ageOut: Int!
    zoneA: String!
    zoneB: String!
    zoneC: String!
    partialZoneA: String!
    partialZoneB: String!
    temperature: String!
  }
  type Employee {
    id: ID!
    nameF: String!
    nameM: String!
    nameL: String!
    employeeId: String!
    password: String!
    accessLevel: String!
    shift: String!
    supervisor: String!
    equipmentCert: [String]!
    createdAt: String!
  }
  type Query {
    getMasterItems: [MasterItem]
    getEmployees: [Employee]
  }
`;
