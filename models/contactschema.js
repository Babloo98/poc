var mongoose = require('mongoose');
var Schema = mongoose.Schema;

contactSchema = new Schema({
    name:  {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    signedInUser:  {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("contactSchema", contactSchema);
