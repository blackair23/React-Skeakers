const Order = require("../models/Orders");

async function getOrder(custId) {
    return Order.find({ customerId: custId }).populate('orderdProducts');
};

async function createOrder(order) {
    return Order.create(order);
};

async function getOrderBySeller(id) {
    return Order.find({ ownerProdId: id }).populate('orderdProducts').populate('customerId');
}

module.exports = {
    getOrder,
    createOrder,
    getOrderBySeller,
}