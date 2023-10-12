const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postSlug: {
    type: String,
    required: true,
  },
  comments: [
    {
      name: {
        type: String,
        required: true,
      },
      commentText: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const CommentModel = mongoose.model('Comment', commentSchema);

module.exports = CommentModel;