import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import taskRoutes from './routes/task';
import authRoutes from './routes/auth'
import { FALLBACK_PORT, PATH_API, PATH_API_TASKS } from './models/constants';

const app = express();
const PORT = process.env.PORT || FALLBACK_PORT;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (_req, res) => {
    res.send('ToDo Express');
});

app.use(PATH_API, authRoutes)
app.use(PATH_API_TASKS, taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});