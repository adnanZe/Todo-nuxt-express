import { Request, Response } from 'express';
import Task from '../models/task';
import * as taskService from '../services/task';

export const getTasks = (_req: Request, res: Response) => {
    const tasks = taskService.getTasks();
    res.json(tasks);
};

export const createTask = (req: Request & { user?: { id: string } }, res: Response) => {
    const newTask: Task = { ...req.body, id: taskService.getNextTaskId(), userId: req.user?.id };
    const createdTask = taskService.createTask(newTask);
    res.json(createdTask);
};

export const updateTask = (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id, 10);
    const updatedTask = req.body;

    const updatedTaskResult = taskService.updateTask(taskId, updatedTask);

    if (updatedTaskResult) {
        res.json(updatedTaskResult);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

export const deleteTask = (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id, 10);

    taskService.deleteTask(taskId);

    res.sendStatus(204);
};
