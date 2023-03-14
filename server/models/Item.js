const { Schema, model, Types } = require('mongoose');

const itemSchema = new Schema({
    name: {type: String, required: true, minlength: [3, 'Make must be at least 4 charakters long']},
    price: { type: Number, required:true, min:[0.01, 'Price must be positive number'] },
    stock: { type: Number, required:true, min:[0.01, 'Price must be positive number'] },
    img: [{type: String, required: [true, 'Image URL is required']}],
    description: {type: String, required: true, minlength: [10, 'Description must be at least 10 charakters long']},
    category: {type: String, required: true, minlength: [3, 'Make must be at least 4 charakters long']},
    size: { type: Number, required: true, },
    _ownerId: { type: Types.ObjectId , ref: 'User', required: true },
});

const Item = model('Item', itemSchema);

module.exports = Item;