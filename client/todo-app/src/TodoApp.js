import React, { useState, useEffect } from "react";
import axios from "axios";
import "./todoapp.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Fetch Todos
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("http://localhost:5000/api/todos");
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  // Add Todo
  const addTodo = async () => {
    const res = await axios.post("http://localhost:5000/api/todos", { task });
    setTodos([...todos, res.data]);
    setTask("");
  };

  // Update Todo
  const updateTodo = async (id, completed) => {
    await axios.put(`http://localhost:5000/api/todos/${id}`, { completed });
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => updateTodo(todo.id, !todo.completed)}
            />
            {todo.task}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
