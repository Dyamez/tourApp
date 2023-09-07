import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,

    password: String,

    isAdmin: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
/*
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.model('User', UserSchema)
*/
