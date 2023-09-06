import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    distance: {
        type: String,
        require: true
    },
    photos: {
        type: [String],
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: false
    }
}, { timestamps: true })

export default mongoose.model('User', UserSchema)