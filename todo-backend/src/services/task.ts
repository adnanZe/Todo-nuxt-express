import Task from '../models/task';

const tasks: Task[] = [
    { id: 1, title: 'Task 1', completed: false, userId: 1 },
    { id: 2, title: 'Task 2', completed: true, userId: 1 },
];

export const getTasks = () => tasks;

export const createTask = (task: Task) => {
    const newTask = { ...task };
    tasks.push(newTask);
    return newTask;
};

export const updateTask = (taskId: number, updatedTask: Task) => {
    const index = tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
        return tasks[index];
    }
    return undefined;
};

export const deleteTask = (taskId: number) => {
    const index = tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
};

export const getNextTaskId = () => tasks.length + 1;