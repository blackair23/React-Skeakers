const { hasUser } = require('../middleware/guards');
const { getOrder, createOrder, getOrderBySeller } = require('../services/orderService');
const { parseError } = require('../util/parser');

const orderController = require('express').Router();

orderController.get('/seller/:id', hasUser(), async (req, res) => {

    if(req.user._id != req.params.id){
        return res.status(403).json({ message: 'You cannot modify this record!' })
    }
    
    try {
        const orders = await getOrderBySeller(req.params.id);
        res.json(orders);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message })
    }
});

orderController.get('/:id', hasUser() ,async (req, res) => {

    if(req.user._id != req.params.id){
        return res.status(403).json({ message: 'You cannot look to this record!' })
    }
    
    try {
        const orders = await getOrder(req.params.id);
        console.log(orders)
        res.json(orders);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message })
    }
});

orderController.post('/', hasUser(), async (req, res) => {
    try {
        const data = Object.assign({ customerId: req.user._id }, req.body);
        const item = await createOrder(data);
        res.json(item);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message })
    }
});

module.exports = orderController;


