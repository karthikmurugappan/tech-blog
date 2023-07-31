const { Comments } = require('../models');

const commentsData = [
    {
        "comment": "This is great!",
        "blog_data_id": 1,
        "user_id": 3
    },
    {
        "comment": "This is terrible!",
        "blog_data_id": 2,
        "user_id": 1
    },
    {
        "comment": "This is cool!",
        "blog_data_id": 3,
        "user_id": 1
    },
    {
        "comment": "This is amazing!",
        "blog_data_id": 2,
        "user_id": 2
    },
    {
        "comment": "This is fantastic!",
        "blog_data_id": 3,
        "user_id": 2
    }
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;