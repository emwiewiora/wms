const { ApolloServer } = require("apollo-server");
// const { gql } = require("apollo-server");
const mongoose = require("mongoose");


const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const masterItem = require("./models/MasterItem");
const employee = require("./models/Employee");
const { MONGODB } = require("./config");

// const resolvers = {
//   Query: {
//     async getMasterItems() {
//       try {
//         const masteritems = await masterItem.find();
//         return masteritems;
//       } catch (err) {
//         throw new Error(err);
//       }
//     },
//     async getEmployees() {
//       try {
//         const employees = await employee.find();
//         return employees;
//       } catch (err) {
//         throw new Error(err);
//       }
//     },
//   },
// };

const server = new ApolloServer({
  typeDefs,
  resolvers
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
