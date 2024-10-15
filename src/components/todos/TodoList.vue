<script setup lang="ts">
import TodoItem from '@/components/todos/TodoItem.vue'
import { useTodosStore } from '@/stores/todos'

const todosStore = useTodosStore()
</script>

<template>
  <ul class="todo-list">
    <TodoItem v-for="todo in todosStore.filteredTodos" :key="todo.id" :todo="todo" />
  </ul>
</template>
