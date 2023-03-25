const bcrupt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require("../models/User");
require('dotenv').config();

const SECRET = process.env.SECRET;

const tokenBlacklist = new Set(); 

async function register(username, email, password) {
    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });

    if(existingEmail) {
        throw new Error('Email is taken');
    }
    if(existingUsername) {
        throw new Error('Username is taken');
    }

    const user = await User.create({
        username,
        email, 
        hashedPassword: await bcrupt.hash(password, 10),
    });

    return  createToken(user)
};

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if(!user) {
        throw new Error('Incorrect email or password!');
    }

    const match = await bcrupt.compare(password, user.hashedPassword);

    if(!match) {
        throw new Error('Incorrect email or password!');
    }

    return createToken(user);

};

async function logout(token) {
    tokenBlacklist.add(token);
};

async function getProfileById(id) {
    return User.findById(id);
};

async function updateProfile(userId, update) {
    const email = update.body.email;
    const username = update.body.username;

    const existingUser = await User.findById(userId);

    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    
    if(existingUser.username != update.body.username){
        if(existingUsername) {
            throw new Error('Username is taken');
        } else {
            existingUser.username = update.body.username;
        }
    }
    if(existingUser.email != update.body.email){
        if(existingEmail) {
            throw new Error('Email is taken');
        } else {
            existingUser.email = update.body.email;
        }
    }

    existingUser.profileImg = update.body.profileImg;
    existingUser.city = update.body.city;

    await existingUser.save();
    const newUser = await User.findById(userId);

    return createToken(newUser);
}

function createToken(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    }

    return {
        _id: user._id,
        email: user.email,
        username: user.username,
        profileImg: user.profileImg,
        city: user.city,
        accessToken: jwt.sign(payload, SECRET)
    }
};

function parseToken(token) {
    if(tokenBlacklist.has(token)) {
        throw new Error('Token is blacklisted');

    }

    return jwt.verify(token, SECRET)
    //TODO scan blacklist for token 
};

module.exports = {
    register, 
    login, 
    logout,
    getProfileById,
    updateProfile,
    parseToken,
}