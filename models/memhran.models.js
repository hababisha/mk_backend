//memhran models
const mongoose = require('mongoose');

const memhranSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Memhran', memhranSchema);
