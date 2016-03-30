var db = require('../config/db.js');
var NoteSchema = require('./note-schema');

var Note = db.model('Note', NoteSchema);

module.exports = Note;
