<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'

const todosStore = useTodosStore()

</script>

<template>
  <footer class="app-footer">{{ todosStore.stats.active }} more to do, {{ todosStore.stats.done }} done</footer>
</template>
