const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    roll: String,
    department: String,
    email: String,
}, { timestamps: true });

module.experts = mongoose.model('Student', studentSchema)