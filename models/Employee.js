const { model, Schema } = require('mongoose');

const employeeSchema = new Schema({
    nameF: String,
    nameM: String,
    nameL: String,
    employeeId: String,
    password: String,
    accessLevel: String,
    shift: String,
    supervisor: String,
    equipmentCert: [String],
    createdAt: String
});

module.exports = model('Employee', employeeSchema, 'employee');