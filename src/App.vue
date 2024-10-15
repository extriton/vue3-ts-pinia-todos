<script setup lang="ts">
import TodoHeader from '@/components/todos/TodoHeader.vue'
import TodoFilters from '@/components/todos/TodoFilters.vue'
import TodoList from '@/components/todos/TodoList.vue'
import TodoAddItem from '@/components/todos/TodoAddItem.vue'
import TodoFooter from '@/components/todos/TodoFooter.vue'
</script>

<template>
  <div class="todos-wrap">
    <TodoHeader />
    <TodoFilters />

    <main class="app-main">
      <TodoList />
      <TodoAddItem />
    </main>

    <TodoFooter />
  </div>
</template>

<style>
.todos-wrap {
  padding: 15px;
  border: 1px solid gray;
  border-radius: 10px;
}
</style>
