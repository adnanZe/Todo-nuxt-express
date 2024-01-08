<template>
  <div class="todo-app">
    <h1>Todo App</h1>
    <div class="add-todo">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add a new todo" />
      <button @click="addTodo">Add</button>
    </div>
    <ul class="todo-list">
      <li v-for="(todo, index) in store.getTodos" :key="index">
        <span>{{ todo.title }}</span>
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTodoStore } from "../store/index";

const store = useTodoStore();
const newTodo = ref("");

onMounted(() => {
  store.fetchTodos();
});

const addTodo = async () => {
  if (newTodo.value.trim() === "") return;
  await store.addTodo({
    title: newTodo.value,
    completed: false,
  });
  newTodo.value = "";
};

const removeTodo = (index: number) => {
  store.removeTodo(index);
};
</script>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.add-todo {
  display: flex;
  margin-bottom: 10px;
}

.add-todo input {
  flex: 1;
  padding: 8px;
  margin-right: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-todo button {
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 10px;
}

.todo-list li span {
  flex: 1;
  margin-right: 10px;
}

.todo-list li button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
