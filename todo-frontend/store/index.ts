import { defineStore } from 'pinia';

export const useTodoStore = defineStore({
    id: 'todo',
    state: () => ({
        todos: [] as string[],
    }),
    actions: {
        addTodo(todo: string) {
            this.todos.push(todo);
        },
        removeTodo(index: number) {
            this.todos.splice(index, 1);
        },
    },
    getters: {
        getTodos: (state) => state.todos
    },
});