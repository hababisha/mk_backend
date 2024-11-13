//lmat models
const mongoose = require('mongoose');

const lmatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lmat', lmatSchema);