import { Request, Response } from 'express';

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

interface Task {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

let tasks: Task[] = [
    { id: 1, title: 'Task 1', completed: false, userId: 1 },
    { id: 2, title: 'Task 2', completed: true, userId: 1 },
];

const getTasks = (_req: Request, res: Response) => {
    res.json(tasks);
};

interface CustomRequest extends Request {
    user?: User;
}

const createTask = (req: CustomRequest, res: Response) => {
    const newTask: Task = { ...req.body, id: tasks.length + 1, userId: req.user?.id };
    tasks.push(newTask);
    res.json(newTask);
};

const updateTask = (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id, 10);
    const updatedTask = req.body;

    tasks = tasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task));

    res.json(tasks.find((task) => task.id === taskId));
};

const deleteTask = (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id, 10);

    tasks = tasks.filter((task) => task.id !== taskId);

    res.sendStatus(204);
};

export { getTasks, createTask, updateTask, deleteTask };


