const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    creator: {
      name: {
        type: String,
        required: true
      }
    }
  },
  // options - automatic createdAt and updatedAt
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
