const { hasUser } = require('../middleware/guards');
const { createConversation, getConversations } = require('../services/conversationService');
const { parseError } = require('../util/parser');

const conversationController = require('express').Router();

conversationController.post('/', hasUser(), async (req, res) => {
    if(!req.body.senderId && !req.body.receiverId){
        return res.status(400).json({ message: 'Conversation members error!' })
    }
    const conversation = {members: [req.body.senderId, req.body.receiverId]};
    
    try {
        const result = await createConversation(conversation);    
        res.json(result);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message })  
    }
});

conversationController.get('/:id', hasUser(), async (req, res)=> {
    try {
        const result = await getConversations(req.params.id);
        res.json(result)
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message })  
    }
});

module.exports = conversationController;