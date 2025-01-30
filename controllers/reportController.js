const User = require('../models/User');
const Post = require('../models/Post');

exports.getReport = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const postCount = await Post.countDocuments();
    res.json({ userCount, postCount });
  } catch (error) {
    res.status(500).json('Internal Server Error');
  }
};
