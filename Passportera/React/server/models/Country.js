const mongoose = require('mongoose');
const validations = require('./validations/country');

mongoose.Promise = global.Promise;

const countrySchema = mongoose.Schema({
    name: {
        type: String,
        validate: validations.name
    },
    ISOCode: {
        type: String,
        validate: validations.code
    }
});

let Country = mongoose.model('Country', countrySchema);

module.exports = Country;
