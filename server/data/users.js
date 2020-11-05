const bcrypt = require('bcryptjs')
const users = [
    {
        name:'Admin user',
        email: 'admin@example.com',
        password:bcrypt.hashSync('xxxx123',10),
        isAdmin: true,
    },
    {
        name:'Sagar Giri',
        email: 'sgc@example.com',
        password:bcrypt.hashSync('xxxx123',10),
    },
    {
        name:'Bot user',
        email: 'bot@example.com',
        password:bcrypt.hashSync('xxxx123',10),
    },
]

module.exports = users