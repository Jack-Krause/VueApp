import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema({
    // class: User,
    name: String,
    email: String,

    dateCreated: { type: Date, default: Date.now },
    connections: [Number]
})

const User = mongoose.model("User", userSchema, "users")

module.exports = User






