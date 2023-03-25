const Conversation = require("../models/Conversation");

async function createConversation(conv) {
    return Conversation.create(conv);
}

async function getConversations(id) {
    return Conversation.find({ members: id}).populate({
        path: 'members',
        select: '-hashedPassword'
      });
}

module.exports = {
    createConversation,
    getConversations,
}