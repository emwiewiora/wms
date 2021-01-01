const { model, Schema } = require("mongoose");

const masterItemSchema = new Schema({
  itemNumber: String,
  description: String,
  descriptionShort: String,
  perCase: Number,
  zoneA: String,
  employee: {
    type: Schema.Types.ObjectId,
    ref: "employee",
  },
});

module.exports = model("masterItem", masterItemSchema, "masterItem");
