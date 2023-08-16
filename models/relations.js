const comments = require("./comments");
const posts = require("./posts");


posts.hasMany(comments,  { foreignKey: 'postId' })
comments.belongsTo(posts)