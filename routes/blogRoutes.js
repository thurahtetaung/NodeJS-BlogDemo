const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

// blog routes
router.get('/', blogController.blog_index);

// create a new blog from user input
router.post('/', blogController.blog_create_post
);

// render the create blog form
router.get('/create', blogController.blog_create_get);

// view a single blog
router.get('/:id', blogController.blog_details)

// delete a blog from database
router.delete('/:id', blogController.blog_delete)

module.exports = router;