const masterItemResolvers = require('./masterItems');
const employeeResolvers = require('./employee');

module.exports = {
  Query: {
    ...masterItemResolvers.Query,
    ...employeeResolvers.Query,
  }
};
