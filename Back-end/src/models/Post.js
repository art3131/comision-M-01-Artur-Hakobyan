import { Schema, model, } from 'mongoose';

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  comments:[{
    type: Schema.Types.ObjectId,
    ref:'Comment',
  }],
  description:{
    type: String,
    required: true
  },
  imageUrl:{
    type:String,
    required: true
  },
  createdAt:{
  type:Date,
  default: Date.now.toString
},
}, {
  timestamps: true,
  versionKey: false,
});

export const PostModel = model('Post', PostSchema);
