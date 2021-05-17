var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClasificationSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

var Clasification = mongoose.model('Clasification', ClasificationSchema);

module.exports = Clasification;