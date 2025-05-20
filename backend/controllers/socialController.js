import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
  const { content, media } = req.body;
  const post = await Post.create({ user: req.user._id, content, media });
  res.status(201).json(post);
};

export const getFeed = async (req, res) => {
  const feed = await Post.find().sort({ createdAt: -1 }).populate("user", "name");
  res.json(feed);
};

export const likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.user._id)) {
    post.likes.push(req.user._id);
  } else {
    post.likes.pull(req.user._id);
  }
  await post.save();
  res.json({ message: "Post like toggled" });
};

export const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
};
