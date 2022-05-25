const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();

// blog routes
router.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { blogs: result, title: 'All blogs' });
        })
        .catch(err => {
            console.log(err);
        });
});

// create a new blog from user input
router.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(result => res.redirect('/blogs'))
        .catch(err => console.log(err));
}
);

// view a single blog
router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => console.log(err));
})

// render the create blog form
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

module.exports = router;