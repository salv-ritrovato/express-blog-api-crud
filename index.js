// Importing express
const express = require('express');
const app = express();
const PORT = 3000;

// Import posts.js
const postsRouter = require('./routes/posts');

// Serves static files from 'public' at '/static'
app.use('/static', express.static('public'));

// Root route
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// Posts
app.use('/posts', postsRouter);

// Start the server on PORT
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});