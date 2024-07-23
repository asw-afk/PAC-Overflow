const User = require('./User');
const Post = require('./Posts');
const Comment = require('./Comment')

// gives Comment table access to Post_id
// even though visually comments look like the child element of a post, the comments will be retreived from the database by their id+the id of the post they were created on
Post.hasMany(Comment,{
    foreignKey:'post_id',
    onDelete: 'CASCADE',
});
Comment.belongsTo(Post,{
    foreignKey:'post_id',
});
//gives Comments table access to user_id
Post.hasOne(User,{
    foreignKey:'post_id',
    onDelete: 'CASCADE',
});

User.belongsTo(Post,{
    foreignKey:'post_id',
});
//gives Comments table access to user_id
Comment.hasOne(User,{
    foreignKey:'user_id',
    onDelete: 'CASCADE',
});

User.belongsTo(Comment,{
    foreignKey:'user_id',
});

module.exports = { User, Post, Comment };