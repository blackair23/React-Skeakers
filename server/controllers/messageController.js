const { hasUser } = require('../middleware/guards');
const { createMessage, getMessegesByConversation } = require('../services/messageService');
const { parseError } = require('../util/parser');

const messageController = require('express').Router();

messageController.post('/', hasUser(), async (req, res) => {
    try {
        const result = await createMessage(req.body);
        res.status(200).json(result);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message })
    }
});

messageController.get('/:id', hasUser(), async (req, res) => {
    console.log(req.params.id)
    try {
        const result = await getMessegesByConversation(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        const message = parseError(err);
        res.status(400).json({ message })
    }
})


module.exports = messageController;