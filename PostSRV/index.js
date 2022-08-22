require('dotenv').config()
const express =  require('express');
const { post } = require('../config.js');
const posts = require('./Components/Post/postNetwork');
const errors = require('../Network/Errors');

const app = express();

//Middleware
app.use(express.json());

// Rutas
app.use('/api/posts', posts);


// Error Handler
app.use(errors);
app.listen(post.port, () => {
    console.log(`Server Post: running on port ${post.port}`);
});
