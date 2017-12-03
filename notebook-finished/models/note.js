const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Note', NoteSchema);