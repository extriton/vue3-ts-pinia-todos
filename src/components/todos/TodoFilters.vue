<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { type IFilter } from '@/types/IFilter'

const todosStore = useTodosStore()

const filters: IFilter[] = ['All', 'Active', 'Done']
</script>

<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        v-for="filter in filters"
        :key="filter"
        class="button"
        :class="{ 'button--primary': filter === todosStore.activeFilter }"
        @click="todosStore.setFilter(filter)"
      >
        {{ filter }}
      </button>
    </section>
  </aside>
</template>
