const { Schema, model, Types } = require('mongoose');

const commentSchema = new Schema({
    comment: { type: String, required: true },
    stars: { type: String, required: true },
    commentOwnerId: {  type: Types.ObjectId , ref: 'User', required: true },
    itemId: { type: Types.ObjectId, ref: 'Item' , required: true },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
