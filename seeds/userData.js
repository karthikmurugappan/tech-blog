// User seeds.
const { User } = require('../models');

const userData = [
    {
        "name": "Test1",
        "email": "test1@test.com",
        "password": "password123"
    },
    {
        "name": "Test2",
        "email": "test2@test.com",
        "password": "password123"
    },
    {
        "name": "Test3",
        "email": "test3@test.com",
        "password": "password123"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;