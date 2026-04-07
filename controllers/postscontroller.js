const posts = require("../data/posts");

// Index
const allPosts = (req, res) => {
    res.json(posts);
};

// Show
const getPost = (req, res) => {
    const { id } = req.params;
    res.send(`Dettagli del post ${id}`);
};

// Create
const createPost = (req, res) => {
    res.send('Creazione di un nuovo post');
};

// Update
const updatePost = (req, res) => {
    const { id } = req.params;
    res.send(`Aggiornamento del post ${id}`);
};

// Delete
const deletePost = (req, res) => {
    const { id } = req.params;
    res.send(`Cancellazione del post ${id}`);
};

module.exports = { allPosts, getPost, createPost, updatePost, deletePost };