import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TestSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    required: true,
  },
  wpm: {
    type: Number,
    required: true,
  },
  accuracy: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  taken: {
    type: String,
    required: true,
  },
});

export const Test = new mongoose.model("tests", TestSchema);
