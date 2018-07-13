const mongoose = require('mongoose');
const validations = require('./validations/country');

mongoose.Promise = global.Promise;

const countrySchema = mongoose.Schema({
    name: {
        type: String,
        validate: validations.name
    },
    abbreviatedName: {
        type: String,
        validate: validations.abbreviation
    },
    isoCode: {
        type: String,
        validate: validations.code,
        unique: true
    },
    latitude: {
        type: Number,
        default: 0,
        validate: validations.latitude
    },
    longitude: {
        type: Number,
        default: 0,
        validate: validations.longitude
    }
});

let Country = mongoose.model('Country', countrySchema);

module.exports = Country;
