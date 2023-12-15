import { CommentModel } from "../models/Comment.js";
import { PostModel } from "../models/Post.js";
import {UserModel} from "../models/User.js"
import { isAuthor } from "./post.controller.js";

export const ctrlCreateComment = async (req,res) =>{
    
    const {postId} = req.params
    const userId = req.user._id
    
    const { description} = req.body
    //const isPostAuthor = await isAuthor({ postId, userId });
//
    //if (!isPostAuthor) {
    //return res.status(403).json({ error: 'User is not the post author' });
    //}
    
    try{


        const comment = new CommentModel({
            author: userId,
            description ,
            post: postId
        })
        await comment.save()
        await PostModel.findOneAndUpdate(
            { _id: postId },
            { $push: { comments: comment._id } }
          )
        return res.status(201).json(comment)

    }catch(error){
    res.status(500).json({ error: "Couldn't get comments" });
}
}

export const ctrlListComments = async (req, res) => {
    const { postId } = req.params;
    const userId = req.user._id;
  
    const isPostAuthor = await isAuthor({ postId, userId });
  
    if (!isPostAuthor) {
      return res.status(403).json({ error: 'User is not the post author' });
    }
  
    try {
<<<<<<< HEAD
      const comments = await CommentModel.find({ post: postId },["-__v",])
      .populate("post",["comments","author","-__v"])
      .populate("author",["username"])
=======
      const comments = await CommentModel.find({ post: postId })
      .populate("post")
      .populate('author' ['username', 'avatar','createdAt'])
  
>>>>>>> f924f94db1dd5294d92da6a60e691134e3260f40
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: "Couldn't get comments" });
    }
  };


  export const ctrlDeleteComment = async (req, res) => {
    const { commentId, postId } = req.params;
    const userId = req.user._id;
  
    const isPostAuthor = await isAuthor({ postId, userId });
  
    if (!isPostAuthor) {
      return res.status(403).json({ error: 'User is not the post author' });
    }
    
    const isCommentAuthor = await CommentAuthor({commentId,userId});
    if(!isCommentAuthor){
        return res.status(403).json({error:'User is not the comment author'})
    }

    try {

      await CommentModel.findOneAndDelete({ _id: commentId, post: postId });
  
      await PostModel.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: commentId } }
      );
      

      res.status(200).json({commentId,message:"Comment deleted successfully"});
    } catch (error) {
      res.status(500).json({ error: "Couldn't delete comment" });
    }
  };

  export const ctrlGetCommentById = async (req, res) => {
    const { commentId, postId } = req.params;
    const userId = req.user._id;
  
    const isPostAuthor = await isAuthor({ postId, userId });
  
    if (!isPostAuthor) {
      return res.status(403).json({ error: 'User is not the post author' });
    }
  
    try {
      const comment = await CommentModel.findOne({
        _id: commentId,
        post: postId,
      }).populate('post')
        .populate('author' ['username', 'avatar','createdAt'])
  
      if (!comment) return res.status(404).json({ error: "Comment doesn't exist" });
  
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ error: "Couldn't get comment" });
    }
  };
  
  export const ctrlUpdateComment = async (req, res) => {
    const { commentId, postId } = req.params;
    const userId = req.user._id;
  
    const isPostAuthor = await isAuthor({ postId, userId });
  
    if (!isPostAuthor) {
      return res.status(403).json({ error: 'User is not the post author' });
    }

    const isCommentAuthor = await CommentAuthor({commentId,userId});
    if(!isCommentAuthor){
        return res.status(403).json({error:'User is not the comment author'})
    }
  
    try {
      const comment = await CommentModel.findOne({ _id: commentId });
  
      if (!comment) {
        return res.status(404).json({ error: "Comment doesn't exist" });
      }
  
      comment.set(req.body);
      
      await comment.save();
     
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ error: "Couldn't update comment" });
    }
  };

  //Funcion para evitar que el autor elimine del post elimine/edite posts de otros usuarios
  //Function used to avoid Author of the post being able to delete/edit posts.
  export const CommentAuthor = async ({ userId,commentId }) => {
    try {
      const comment = await CommentModel.findOne({
        _id: commentId,
        author: userId,
        
      });
  
      if (!comment) {
        return false;
      }
  
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };