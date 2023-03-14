const { register, login, logout, getProfileById, updateProfile } = require('../services/userService');

const authController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { parseError } = require('../util/parser');
const { hasUser } = require('../middleware/guards');

authController.post('/register', 
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long!'),
async (req, res) => {
     try{
        const { errors } = validationResult(req);
        if(errors.length > 0) {
            throw errors;
        }
        const token = await register(req.body.username, req.body.email, req.body.password);
        res.json(token);
     } catch(err){
        const message = parseError(err)
        res.status(400).json({ message })
     }
})

authController.post('/login', async (req, res) => {
    try{
       const token = await login(req.body.email, req.body.password);
       res.json(token);
    } catch(err){
        const message = parseError(err)
        res.status(401).json({ message })
    }
})

authController.get('/logout', async (req, res) => {
    const token = req.token;
    await logout(token)
    res.status(204).end();
})

authController.get('/:id', hasUser(), async (req, res) => {
    try {
        const profile = await getProfileById(req.params.id);
        const {_id, city, profileImg, email, username } = profile;
        const profileInf =  {_id, city, profileImg, email, username };
        res.json(profileInf);
    } catch (err) {
        const message = parseError(err);
        res.status(204).json({ message });
    }
    
});

authController.put('/:id', hasUser(), async (req, res) => {
    if(req.user._id != req.params.id) {
        return res.status(403).json({ message: 'You cannot modify this user!' });
    }

    try {
        const result = await updateProfile(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message })
    }
});

module.exports = authController;