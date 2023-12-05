import {Schema, model} from 'mongoose'

const CommentSchema = new Schema({
    author:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
})

const CommentModel = model("Comment", CommentSchema)