var mongoose = require('mongoose');

var typeSchema = new mongoose.Schema({
    name : String,
});

var Fond = mongoose.model('Fond', fondSchema);

module.exports = Fond;