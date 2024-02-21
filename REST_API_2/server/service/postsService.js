const postsData = require('../data/postsData');

exports.getpost = function () {
    return postsData.getPosts();
};