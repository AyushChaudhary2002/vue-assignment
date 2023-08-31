<template>
  <div>
    
    <v-card class="mx-auto" max-width="800">
        <v-card
            class="mb-2 pointer"
            density="compact"
            prepend-avatar="/src/assets/add.svg"
            title= "Add a new task"/>
      <v-list lines="two">
        <v-list-item
          v-for="data in user.data"
          :key="data"
          :title="data.category"
          :subtitle="data.task"
        >
        <template v-slot:prepend>
          <v-avatar class="me-4 mt-2 " >
            <img class="pointer" src="/src/assets/edit.svg" alt="edit" />
          </v-avatar>
        </template>
      
          <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const user = reactive({
  data: [
    {
      category: 'Html',
      task: 'Create a form'
    },
    {
      category: 'Css',
      task: 'add a background color'
    },
    {
      category: 'Javascript',
      task: 'add a function'
    },
    {
      category: 'Vue.Js',
      task: 'add a component'
    }
  ]
})
</script>

<style scoped>
.pointer{
    cursor: pointer;
}
</style>
