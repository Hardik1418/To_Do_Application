const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Todo = sequelize.define('Todo', {
   task: {
      type: DataTypes.STRING,
      allowNull: false
   },
   completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
   }
});

module.exports = Todo;
