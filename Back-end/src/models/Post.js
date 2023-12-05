import {Schema, model} from "mongoose"

const PostSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref:'Comment',
        }
    ],
    author:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    createdAt:{
        type: Date.now
    }

},{
    timestamps: true,
  versionKey: false,
})

export const PostModel = model("Post", PostSchema)