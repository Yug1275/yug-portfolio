import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  techStack: {
    type: [String],
    required: true
  },

  githubLink: {
    type: String
  },

  liveLink: {
    type: String
  },

  image: {
    type: String
  },

  featured: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

export default mongoose.model("Project", projectSchema);