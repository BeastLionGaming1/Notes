import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: ["math", "science", "english", "agriculture", "creative", "creative arts", "creative arts and sports", "cre", "kiswahili", "social studies", "social", "studies", "pre tech", "pre-tech", "Pre-Tech", "Pre-Technical"]
}, { timestamps: true });

const Note = mongoose.model("Note", noteSchema);

export default Note;