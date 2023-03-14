const { hasUser } = require('../middleware/guards');
const { getComments, createComment } = require('../services/commentService');
const { parseError } = require('../util/parser');

const commentController = require('express').Router();

commentController.get('/:id', async(req, res) => {
    const comment = await getComments(req.params.id);
    res.json(comment)
});

commentController.post('/', hasUser(), async(req , res) => {
    try {
        const data = Object.assign({ commentOwnerId: req.user._id }, req.body);
        // console.log(data);
        const comment = await createComment(data);
        res.json(comment);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message })
    }
});

module.exports = commentController;