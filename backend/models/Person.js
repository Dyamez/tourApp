import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    username: String,
    email: String,

    password: String,

    photo: String,
    role: String,
  },
  { timestamps: true }
);

export default mongoose.model("Person", personSchema);

//["Person"] ||  'compilation error fix'

/*
import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
    },

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model["Person"] || ("Person", personSchema); */

//["Person"] ||  'compilation error fix'
