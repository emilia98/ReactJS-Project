const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userGoogleSchema = mongoose.Schema({
    googleId: {
        type: String
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    username: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: {
          values: ['Admin', 'User']
        },
        default: 'User'
    },
    profileId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Profile',
        default: null
    }
});

const UserGoogle = mongoose.model('UserGoogle', userGoogleSchema);

module.exports = UserGoogle;
