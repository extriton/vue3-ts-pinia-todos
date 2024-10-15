import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { intialTodos } from '@/consts/consts'
import { type IFilter } from '@/types/IFilter'
import { type ITodo } from '@/types/ITodo'
import { type IStats } from '@/types/IStats'

export const useTodosStore = defineStore('todos', () => {
  // State
  const activeFilter = ref<IFilter>('All')
  const todos = ref<ITodo[]>(intialTodos)

  // Getters
  const activeTodos = computed<ITodo[]>(() => {
    return todos.value.filter(todo => !todo.completed)
  })

  const doneTodos = computed<ITodo[]>(() => {
    return todos.value.filter(todo => todo.completed)
  })

  const stats = computed<IStats>(() => ({
    active: activeTodos.value.length,
    done: doneTodos.value.length,
  }))

  const filteredTodos = computed<ITodo[]>(() => {
    switch (activeFilter.value) {
      case 'Active':
        return activeTodos.value
      case 'Done':
        return doneTodos.value
      case 'All':
      default:
        return todos.value
    }
  })

  // Actions
  function addTodo(todo: ITodo) {
    todos.value.push(todo)
  }

  function toggleTodo(id: number) {
    const targetTodo: ITodo | undefined = todos.value.find(
      (todo: ITodo) => todo.id === id,
    )
    if (targetTodo) {
      targetTodo.completed = !targetTodo.completed
    }
  }

  function removeTodo(id: number) {
    todos.value = todos.value.filter((todo: ITodo) => todo.id !== id)
  }

  function setFilter(filter: IFilter) {
    activeFilter.value = filter
  }

  return {
    activeFilter,
    todos,
    activeTodos,
    doneTodos,
    filteredTodos,
    stats,
    addTodo,
    toggleTodo,
    removeTodo,
    setFilter,
  }
})
