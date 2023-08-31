<script setup>
import navbarComponent from '@/components/navbarComponent.vue'
import asideComponent from '@/components/asideComponent.vue'
import sectionComponent from './components/sectionComponent.vue';
</script>

<template>
  <header class="header">
    <navbarComponent />
  </header>
  <main class="main">
    <aside class="aside">
      <asideComponent/>
    </aside>
    <section class="section">
      <sectionComponent/>
    </section>
  </main>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
.header{
  width: 100vw;
  background-color: #673ab5;
}
.main{
  display: flex;
  height: 79vh;
  margin: 1vh 0vh;
}
.aside{
  width: 20vw;
  margin:1rem;
  padding: 0.5rem;
}
.section{
  width:70vw;
  margin:1rem;
  padding: 0.5rem;
}
</style>
