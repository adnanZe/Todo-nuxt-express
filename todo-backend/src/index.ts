import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authenticateToken, loginUser } from './modules/auth';
import * as tasksModule from './modules/tasks';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/api/auth/login', loginUser);

app.get('/api/tasks', authenticateToken, tasksModule.getTasks);
app.post('/api/tasks', authenticateToken, tasksModule.createTask);
app.put('/api/tasks/:id', authenticateToken, tasksModule.updateTask);
app.delete('/api/tasks/:id', authenticateToken, tasksModule.deleteTask);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});