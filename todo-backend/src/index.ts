import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getTasks, createTask, updateTask, deleteTask } from './tasks';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (_req, res) => {
    res.send('ToDo Express');
});

app.get('/api/tasks', getTasks);
app.post('/api/tasks', createTask);
app.put('/api/tasks/:id', updateTask);
app.delete('/api/tasks/:id', deleteTask);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});