const Message= require('../models/Message');

async function createMessage(message) {
    return Message.create(message);
};

async function getMessegesByConversation(id) {
    return Message.find({ conevrsationId: id })
}

module.exports = {
    createMessage,
    getMessegesByConversation,
}