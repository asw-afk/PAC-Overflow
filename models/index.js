const User = require('./User');
const Post = require('./Posts');
const Comment = require('./Comment')

Post.hasMany(Comment,{
    foreignKey:'post_id',
    onDelete: 'CASCADE',
});
Comment.belongsTo(Post,{
    foreignKey:'post_id',
});
//gives Comments table access to user_id
User.hasMany(Post,{
    foreignKey:'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User,{
    foreignKey:'user_id',
});
//gives Comments table access to user_id
User.hasMany(Comment,{
    foreignKey:'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User,{
    foreignKey:'user_id',
});

module.exports = { User, Post, Comment };