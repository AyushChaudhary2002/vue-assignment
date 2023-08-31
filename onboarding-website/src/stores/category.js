import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', () => {
  const data = reactive({
    items: [
      {
        category: 'all',
        image: '/src/assets/all.svg'
      },
      {
        category: 'html',
        image: '/src/assets/html.svg'
      },
      {
        category: 'css',
        image: '/src/assets/css.svg'
      },
      {
        category: 'javascript',
        image: '/src/assets/javaScript.svg'
      },
      {
        category: 'vue.js',
        image: '/src/assets/vue.svg'
      }
  ]
  });

  const category = computed(() => {
    const temp = [];
    data.items.forEach((item) => {
      if (item.category !== 'all') temp.push(item.category.toUpperCase());
    });
    return temp;
  });

  const addCategory = (newCategory) => {
    data.items.push(newCategory);
  };

  return { addCategory, category, data};
});
