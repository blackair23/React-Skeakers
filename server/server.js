const express = require('express');
const mongoose = require('mongoose');
const authController = require('./controllers/authController');
const cors = require('./middleware/cors');
const session = require('./middleware/session');
const trimBody = require('./middleware/trimBody');
const dataController = require('./controllers/dataController');
const commentController = require('./controllers/commentController');
const orderController = require('./controllers/orderController');

const connectionString = 'mongodb://127.0.0.1:27017/react-app-sneakers'

start();

async function start() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(connectionString);
    console.log('Database connected');
    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(trimBody());
    app.use(session());

    app.get('/', (req, res) => {
        res.json({ message: 'REST Service operational' });
    });

    app.use('/users', authController);
    app.use('/data/catalog', dataController);
    app.use('/data/comment', commentController);
    app.use('/order', orderController);

    app.listen(3030, () => console.log('Server running port 3030'));
}