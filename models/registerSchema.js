var mongoose = require('mongoose');
var Schema = mongoose.Schema;

registerSchema = new Schema({
    name:  {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true,
    },
    date:  {
        type: String,
    }
}
,{strict: true});

module.exports = mongoose.model("registerSchema", registerSchema);
