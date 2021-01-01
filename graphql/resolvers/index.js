const masterItemResolvers = require('./masterItems');
// const usersResolvers = require('./users');

module.exports = {
  Query: {
    ...masterItemResolvers.Query
  },
//  Mutation: {
    // ...usersResolvers.Mutation
//  }
};