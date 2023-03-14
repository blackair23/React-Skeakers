const Comment = require("../models/Comment");


async function getComments(prodId) {
    return Comment.find({ itemId: prodId }).populate('commentOwnerId');
};

async function createComment(comment) {
    return Comment.create(comment);
};

module.exports = {
    getComments,
    createComment,
}