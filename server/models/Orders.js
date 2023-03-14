const { Schema, model, Types } = require('mongoose'); 

const orderSchema = new Schema({
    address: { type: String, required: true },
    orderdProducts: [{type: Types.ObjectId, ref: 'Item', required: true }],
    ownerProdId: [{ type: Types.ObjectId, ref: 'User', required: true }],
    totalPrice: { type: Number, required: true },
    customerId: { type: Types.ObjectId, ref: 'User', required: true }
});

const Order = model('Order', orderSchema);

module.exports = Order;