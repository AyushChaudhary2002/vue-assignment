import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
  const data = reactive({
    items: []
  })
  const category = computed(() => {
    const temp = []
    data.items.forEach((item) => {
      if (item.category !== 'all') temp.push(item.category.toUpperCase())
    })
    return temp
  })
  const addCategory = (newCategory) => {
    data.items.push(newCategory)
  }
  return { data, category, addCategory }
})
