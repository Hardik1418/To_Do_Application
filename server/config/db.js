const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_app', 'root', 'Hrdk@1409', {
   host: 'localhost',
   dialect: 'mysql'
});

sequelize.authenticate()
   .then(() => console.log('Database connected'))
   .catch(err => console.log('Error: ',err));

module.exports = sequelize;
