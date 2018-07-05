const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const profileSchema = mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    firstName: {
      type: String
    },
    lastName: {
        type: String
    },
    birthdate: {
        type: mongoose.Schema.Types.Date
    },
    Country: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Town: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    isPro: {
        type: Boolean,
        required: true,
        default: false
    },
    profilePicture: {
        type: String,
        default: ''
    },
    comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          default: []
        }
    ],
    registrationDate: {
        type: mongoose.Schema.Types.Date,
        default: Date.now()
    }
})
/*
UserProfile (for user data)
 -> userId -> pointing to the User (ref="User")
 -> firstName
 -> lastName
 -> birthdate
 -> Country
 -> Town
 -> isPro (false) -> for pro subscribers
 -> profilePicture
 -> comments -> ([ObjectIds] -> ref="Comment")
*/