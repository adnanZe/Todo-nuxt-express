import { defineStore } from 'pinia';
import axios from 'axios';
import type Task from "../models/Task"

export const useTodoStore = defineStore({
    id: 'todo',
    state: () => ({
        todos: [] as Task[],
    }),
    actions: {
        async fetchTodos() {
            try {
                const response = await axios.get<Task[]>("http://localhost:3001/api/tasks");
                this.setTodos(response.data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        },
        async addTodo(todo: Task) {
            try {
                const response = await axios.post<Task>("http://localhost:3001/api/tasks", todo);
                this.todos.push(response.data);
            } catch (error) {
                console.error('Error adding todo:', error);
            }
        },
        removeTodo(index: number) {
            try {
                this.todos.splice(index, 1);
            } catch (error) {
                console.error('Error removing todo:', error);
            }
        },
        setTodos(todos: Task[]) {
            try {
                this.todos = todos;
            } catch (error) {
                console.error('Error setting todos:', error);
            }
        },
    },
    getters: {
        getTodos: (state) => state.todos
    },
});