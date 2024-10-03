const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// GET all todos
router.get('/', async (req, res) => {
   const todos = await Todo.findAll();
   res.json(todos);
});

// ADD new todo
router.post('/', async (req, res) => {
   const { task } = req.body;
   const newTodo = await Todo.create({ task });
   res.json(newTodo);
});

// UPDATE todo
router.put('/:id', async (req, res) => {
   const { id } = req.params;
   const { task, completed } = req.body;
   const updatedTodo = await Todo.update(
      { task, completed },
      { where: { id } }
   );
   res.json(updatedTodo);
});

// DELETE todo
router.delete('/:id', async (req, res) => {
   const { id } = req.params;
   await Todo.destroy({ where: { id } });
   res.json({ message: 'Todo deleted' });
});

module.exports = router;
