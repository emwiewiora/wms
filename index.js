const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const masterItem = require("./models/MasterItem");
const employee = require("./models/Employee");
const { MONGODB } = require("./config");

const typeDefs = gql`
  type masterItem {
    id: ID!
    itemNumber: String!
    description: String!
    descriptionShort: String!
    perCase: Int!
    zoneA: String!
  }
  type employee {
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
    getMasterItems: [masterItem]
    getEmployees: [employee]
  }
`;

const resolvers = {
  Query: {
    async getMasterItems() {
      try {
        const masteritems = await masterItem.find();
        return masteritems;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getEmployees() {
      try {
        const employees = await employee.find();
        return employees;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
