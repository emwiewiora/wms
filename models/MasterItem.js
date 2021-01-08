const { model, Schema } = require("mongoose");

const masterItemSchema = new Schema({
  itemNumber: String,
  description: String,
  descriptionShort: String,
  perCase: Number,
  casPerTier: Number,
  casPerPallet: Number,
  caseWidth: Number,
  caseDepth: Number,
  caseHeight: Number,
  ageOut: Number,
  zoneA: String,
  zoneB: String,
  zoneC: String,
  partialZoneA: String,
  partialZoneB: String,
  temperature: String,
  employee: {
    type: Schema.Types.ObjectId,
    ref: "employee",
  },
});

module.exports = model("masterItem", masterItemSchema, "masterItem");
