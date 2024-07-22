const User = require('./User');
const Posts = require('./Posts');
const Post =Posts.Post//not sure why but class 'Post' cannot be found unless i put this. comment appears without though
//establishes parent(Post)/child(Comment) relationship
Post.hasMany(Comment,{
    foreignKey:'post_id',
    onDelete: 'CASCADE',
});
Comment.belongsTo(Post,{
    foreignKey:'post_id',
});

module.exports = { User, Posts };