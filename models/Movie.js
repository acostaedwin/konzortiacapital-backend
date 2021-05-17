var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    clasification: {
        type: String,
        required: true
    },
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;