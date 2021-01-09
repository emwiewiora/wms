const employee = require("../../models/Employee");

module.exports = {
  Query: {
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
