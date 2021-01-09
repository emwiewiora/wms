const masterItem = require("../../models/MasterItem");

module.exports = {
  Query: {
    async getMasterItems() {
      try {
        const masteritems = await masterItem.find();
        return masteritems;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
};
