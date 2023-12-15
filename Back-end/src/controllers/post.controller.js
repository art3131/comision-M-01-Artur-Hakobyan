import { PostModel } from '../models/Post.js';
import { CommentModel } from '../models/Comment.js';
import { UserModel } from "../models/User.js";


export const ctrlCreatePost = async (req, res) => {
  const userId = req.user._id;

  try {
    const { title , description, imageUrl, createdAt } = req.body;
    

    const post = new PostModel({
      title,
      author: userId,
      description,
      imageUrl,
      createdAt
    });

    await post.save();
    await UserModel.findOneAndUpdate(
      { _id: userId },
      { $push: { posts: post._id } }
    )
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlListPosts = async (req, res) => {
  const userId = req.user._id;

  try {
    const posts = await PostModel.find({ author: userId })
      .populate('author', ['username', 'avatarUrl', 'createdAt'])
      .populate('comments',['description',"author","post"])
      .populate({
        path:"comments",
        populate:{
          path:"author",
          model:"User"
        }
      })

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlGetPost = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;

  try {
    const post = await PostModel.findOne({
      _id: postId,
      author: userId,
    })
      .populate('author', ['username', 'avatar','createdAt'])
      .populate('comments'['username','description']);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlUpdatePost = async (req, res) => {
  const userId = req.user._id;
  
  const { postId } = req.params;
 
  try {
    const post = await PostModel.findOne({
      _id: postId,
      author: userId,
      
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    post.set(req.body);

    await post.save();

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlDeletePost = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;

  try {
    const post = await PostModel.findOne({
      _id: postId,
      author: userId,
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    await CommentModel.deleteMany({ _id: { $in: post.comments } });
    
    await PostModel.findOneAndDelete({
      _id: postId,
      author: userId,
    });
    await UserModel.findOneAndUpdate(
      {_id:userId},
      {$pull: {posts:postId}}
    )
    
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const isAuthor = async ({ postId, userId,commentId }) => {
  try {
    const post = await PostModel.findOne({
      _id: postId,
      author: userId,
      
    });

    if (!post) {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

