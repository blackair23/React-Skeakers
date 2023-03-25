const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    conevrsationId: { type: String, required:true },
    senderId: { type: String, required:true },
    text: { type: String, required:true },
    },
    { timestamps: true}
)

const Message = model('Message',  messageSchema);

module.exports = Message;