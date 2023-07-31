const { Blog_data } = require('../models');

const blogData = [
    {
        "post_title": "Website",
        "post_contents": "This is a great site!",
        "user_id": 1
    },
    {
        "post_title": "Many Users",
        "post_contents": "There are many users on this site!",
        "user_id": 2
    },
    {
        "post_title": "Viral",
        "post_contents": "This will become viral!",
        "user_id": 3
    }
];

const seedBlog = () => Blog_data.bulkCreate(blogData);

module.exports = seedBlog;