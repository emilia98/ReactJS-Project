/*
const mongoose = require('mongoose');
const validations = require('./validations/user');
const encryption = require('../utilities/encryption');
mongoose.Promise = global.Promise;

const userSchema = mongoose.Schema({
    username: {
        type: String,
        // required: true,
        validate: validations.username
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // required: true,
        validate: validations.email
    }, 
    active: {
        type: Boolean,
        required: true,
        default: false
    },
    role: {
        type: String,
        required: true,
        enum: {
          values: ['Admin', 'User']
        },
        default: 'User'
    },
    profilePicture: {
        type: String,
        default: 'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png'
    }
});



const User = mongoose.model('User', userSchema);

userSchema.path('username').validate( async function(value){

    let isValid =  true;
    let count = 0;
    
    try {
        count =  await User.count({username: value});
    } catch(err) {
        isValid = false;
    }

    if (count > 0) {
        isValid = false;
    }

    return isValid;
}, 'User already exists!');


userSchema.path('email').validate( async function(value){
    let isValid =  true;
    let count = 0;
    
    try {
        count =  await User.count({email: value});
    } catch(err) {
        isValid = false;
    }

    if (count > 0) {
        isValid = false;
    }

    return isValid;
}, 'User with this email already exists!');


module.exports = User;
*/