import { defineStore } from 'pinia';
import type Task from "../models/Task"

export const useTodoStore = defineStore({
    id: 'todo',
    state: () => ({
        todos: [] as Task[],
    }),
    actions: {
        addTodo(todo: Task) {
            this.todos.push(todo);
        },
        removeTodo(index: number) {
            this.todos.splice(index, 1);
        },
        setTodos(todos: Task[]) {
            this.todos = todos;
        }
    },
    getters: {
        getTodos: (state) => state.todos
    },
});