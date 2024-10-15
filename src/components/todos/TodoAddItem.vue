<script setup lang="ts">
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'
import { type ITodo } from '@/types/ITodo'

const todoText = ref<string>('')
const isFormVisible = ref<boolean>(false)

const todosStore = useTodosStore()

function addTodo() {
  if (!todoText.value) {
    return
  }

  const newTodo: ITodo = {
    id: Date.now(),
    text: todoText.value,
    completed: false,
  }

  todosStore.addTodo(newTodo)

  todoText.value = ''
}

function showForm() {
  isFormVisible.value = true
}

function hideForm() {
  isFormVisible.value = false
}
</script>

<template>
  <section class="add-todo">
    <form v-if="isFormVisible" class="add-todo__form" @submit.prevent="addTodo">
      <button class="close-button" type="button" @click="hideForm">
        <i class="bi bi-x"></i>
      </button>
      <div class="text-input text-input--focus">
        <input v-model="todoText" class="input" />
      </div>
      <button class="button button--filled">Add task</button>
    </form>
    <button
      v-else
      type="submit"
      class="add-todo__show-form-button"
      @click="showForm"
    >
      <i class="bi bi-plus-lg"></i>
    </button>
  </section>
</template>
