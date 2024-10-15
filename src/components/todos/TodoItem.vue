<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import { type ITodo } from '@/types/ITodo'
import { useTodosStore } from '@/stores/todos'

const props = defineProps({
  todo: {
    type: Object as PropType<ITodo>,
    required: true,
  },
})

const todosStore = useTodosStore()

function toggleTodo() {
  todosStore.toggleTodo(props.todo.id)
}

function removeTodo() {
  todosStore.removeTodo(props.todo.id)
}
</script>

<template>
  <li
    class="todo-item"
    :class="{ 'todo-item--done': props.todo.completed }"
    @click="toggleTodo"
  >
    <div class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>
    <span class="todo-item__text">{{ props.todo.text }}</span>
    <button class="todo-item__remove-button" @click.stop="removeTodo">
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>
