// gives Comment table access to Post_id
// even though visually comments look like the child element of a post, the comments will be retreived from the database by their id+the id of the post they were created on

const User = require('./User');
const Post = require('./Posts');
const Comment = require('./Comment')

// association betwwen user and post 
User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });

// association between post and comment 
Post.hasMany(Comment, { foreignKey: 'post_id' });
Comment.belongsTo(Post, { foreignKey: 'post_id' });

// association between user and comment 
User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });
module.exports = { User, Post, Comment };