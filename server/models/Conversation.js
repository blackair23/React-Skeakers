const { Schema, model, Types } = require('mongoose');

const conversationSchema = new Schema({
    members: [{type: Types.ObjectId, ref: 'User'}],
    },
    { timestamps: true}
)

const Conversation = model('Conversation',  conversationSchema);

module.exports = Conversation;