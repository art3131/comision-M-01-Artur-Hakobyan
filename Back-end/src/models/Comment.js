import { Schema, model } from 'mongoose';

const CommentSchema = new Schema({
  
  author: {
    type: Schema.Types.ObjectId,
    default: 'User',
  },
  description:{
    type: String,
    required: true
  },
  post:{
      type: Schema.Types.ObjectId,
     
  }
}, {
  timestamps: true,
  versionKey: false,
});

export const CommentModel = model('Comment', CommentSchema);
