<template>
  <header class="header">
    <navbarComponent />
  </header>
  <main class="main">
    <aside class="aside">
      <asideComponent @filter="filter" />
    </aside>
    <section class="section">
      <sectionComponent :key="filterCriteria" :filterCriteria="filterCriteria" />
    </section>
  </main>
</template>

<script setup>
  import { useTaskStore } from './stores/taskData';
  import { useCategoryStore } from './stores/category';
  import { ref } from 'vue';
  import asideComponent from '@/components/asideComponent.vue';
  import navbarComponent from '@/components/navbarComponent.vue';
  import sectionComponent from './components/sectionComponent.vue';
  
  
  const filterCriteria = ref('');
  const  filter = (value) => {
    filterCriteria.value = value.toUpperCase();
  }
  
  if (localStorage.getItem('taskStorage') && !useTaskStore().data.task.length) {
    const tempData = JSON.parse(localStorage.getItem('taskStorage'));
    tempData.forEach((ele) => {
      useTaskStore().addTask(ele);
    });
  }
  
  if (localStorage.getItem('categoryStorage') && !useCategoryStore().data.items.length) {
    const tempCategory = JSON.parse(localStorage.getItem('categoryStorage'));
    tempCategory.forEach((ele) => {
      useCategoryStore().addCategory(ele);
    });
  }
</script>
  
<style scoped>
  * {
    box-sizing: border-box;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  .aside {
    margin: 1rem;
    padding: 0.5rem;
    width: 20vw;
  }

  .header {
    background-color: #673ab5;
    width: 100vw;
  }
  
  .main {
    display: flex;
    height: 79vh;
    margin: 1vh 0vh;
  }
  
  .section {
    margin: 1rem;
    padding: 0.5rem;
    width: 70vw;
  }
</style>
