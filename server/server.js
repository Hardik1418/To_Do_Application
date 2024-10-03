const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const sequelize = require('./config/db'); // DB Connection

app.use(cors());
app.use(bodyParser.json());

// Import Routes
const todoRoutes = require('./routes/todo.routes');
app.use('/api/todos', todoRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
