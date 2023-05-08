const { User } = require('../models');

const userData = [{
        username: 'sql4lyfe',
        password: 'password1'

    },
    {
        username: 'cssh8r_45',
        password: 'password2'
    },
    {
        username: 'nice_patient_man',
        password: 'password3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;