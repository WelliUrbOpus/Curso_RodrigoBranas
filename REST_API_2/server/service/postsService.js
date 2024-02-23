const postsData = require('../data/postsData');

exports.getposts = function () {
    return postsData.getPosts();
};

exports.getpost = function (id) {
    return postsData.getPost(id);
};

exports.savePost = function (post) {
    return postsData.savePosts(post);
};

exports.deletePost = function (id) {
    return postsData.deletePost(id);
};

exports.updatePost = function (id, post) {
    return postsData.updatePost(id, post);
};