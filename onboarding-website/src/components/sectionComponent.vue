<template>
  <v-card class="mx-auto" max-width="800">
    <v-card
      class="mb-2 pointer"
      density="compact"
      prepend-avatar="/src/assets/add.svg"
      title="Add a new task"
      @click="toggle">
      <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
        <modalComponent v-if="isModalVisible" @close="closeModal" />
      </v-overlay>
    </v-card>

    <v-list lines="six">
      <v-list-item
        v-for="data in tempData"
        :key="data"
        :title="data.category"
        :subtitle="data.task"
        @click="toggle">
        <template v-slot:prepend>
          <v-avatar class="me-4 mt-2">
            <img class="pointer" src="/src/assets/edit.svg" alt="edit" />
          </v-avatar>
        </template>
        <template v-slot:append>
          <v-avatar class="me-4 mt-2">
            <h4>{{ data.duration }}Hr.</h4>
          </v-avatar>
        </template>
        <v-overlay activator="parent" location-strategy="connected" scroll-strategy="reposition">
          <modalComponent v-if="isModalVisible" @close="closeModal" :data="data" />
        </v-overlay>
        <v-divider thickness="5" color="blue"></v-divider>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
  import { useTaskStore } from '@/stores/taskData.js';
  import { ref } from 'vue';
  import modalComponent from './modalComponent.vue';

  const taskData = useTaskStore();
  const tempData = taskData.getData(props.filterCriteria);
  const isModalVisible = ref(false);
  
  const props = defineProps({
    filterCriteria: {
      type: String
    }
  });
   
  const toggle = () => {
    isModalVisible.value = true;
  }
  
  const closeModal = () => {
    isModalVisible.value = false;
  }
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
  
  .pointer:hover {
    background-color: aliceblue;
    color: #673ab5;
  }
</style>
