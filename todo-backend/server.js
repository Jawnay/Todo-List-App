const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cron = require('node-cron'); // Import node-cron
const Todos = require('./dbTodos');

dotenv.config();

const {
    getTodos, 
    createTodo, 
    updateTodo, 
    deleteTodo
} = require('./controllers/todoController');

// App config
const app = express();
const port = process.env.PORT || 8000;
const connectionURL = process.env.MONGO_URI;

// Middlewares
// Convert to json
app.use(express.json());
app.use(cors());

// DB Config
mongoose.connect(connectionURL)
    .then(() => {
        app.listen(port,() => console.log(`Running on port: ${port}`));

        // Cron job - runs every Sunday at 12:00 AM (midnight)
        cron.schedule('0 0 * * 0', async () => {
            try {
                // Perform your database interaction here
                console.log("Running database interaction...");
                const result = await Todos.find({});
                console.log("Todos:",result);
                // For example, you can call a function from your controller
                // await performDatabaseInteraction();
            } catch (error) {
                console.error("Error in database interaction:", error);
            }
        });
    })
    .catch((err) => {
        console.log(err);
    });

// API Enpoints
// Get Todos list
app.get('/todos', getTodos);

// Create a new Todo
app.post('/todos', createTodo);

// Update a Todo
app.put('/todos/:id', updateTodo);

// Delete a Todo
app.delete('/todos/:id', deleteTodo);
