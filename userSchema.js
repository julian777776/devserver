const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type:String, 
        required: [true, 'username is your mom']
    },
    created: {
        type:Date,
        required: [true, 'created date is boyyyyyy']
    }
})

module.exports = userSchema