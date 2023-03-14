const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true },
    hashedPassword: { type: String, required:true },
    profileImg: { type: String, default: 'https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png'},
    city: { type: String, default: '' },
});

userSchema.index({ username: 1 },  {
    collation: {
        locale: 'en',
        strength: 2,
    }
});

userSchema.index({ email: 1 },  {
    collation: {
        locale: 'en',
        strength: 2,
    }
});

const User = model('User', userSchema);

module.exports = User;