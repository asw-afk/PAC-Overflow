// gives Comment table access to Post_id
// even though visually comments look like the child element of a post, the comments will be retreived from the database by their id+the id of the post they were created on

const User = require('./User');
const Post = require('./Posts');
const Comment = require('./Comment')

// gives Comment table access to Post_id
// even though visually comments look like the child element of a post, the comments will be retreived from the database by their id+the id of the post they were created on
// Post.hasMany(Comment,{//yes
//     foreignKey:'post_id',
//     onDelete: 'CASCADE',
// });
// Comment.belongsTo(Post,{//yes
//     foreignKey:'post_id',
// });



// //gives Comments table access to user_id
// Post.hasOne(User,{ // no
//     foreignKey:'user_id', // this was post_id supposed to be user_id
//     onDelete: 'CASCADE',
// });

// Post.belongsTo(User,{ //yes
//     foreignKey:'user_id',// this was post_id supposed to be user_id
// });
// //gives Comments table access to user_id
// Comment.hasOne(User,{
//     foreignKey:'user_id',
//     onDelete: 'CASCADE',
// });

// User.belongsTo(Comment,{
//     foreignKey:'user_id',  //this was user_id supposed to be comment_id
// });
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