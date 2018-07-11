const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let activatorSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId
  },
  activationLink: {
    type: String
  },
  activationCode: {
    type: String
  },
  used: {
    type: Boolean,
    default: false
  },
  expirationDate: {
    type: mongoose.Schema.Types.Date,
    default: new Date((Date.now() + 2592000000))
  }
});

const Activator = mongoose.model('Activator', activatorSchema);

module.exports = Activator;
