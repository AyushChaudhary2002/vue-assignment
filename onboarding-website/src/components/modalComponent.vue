<template>
  <v-card class="mx-auto modal" width="400" variant="outlined">
    <img @click="$emit('close')" class="cross" src="@/assets/cross.svg" alt="cross" />
    <v-form @submit.prevent>
      <v-select v-model="newTask.category" :items="onlyCategoryData.items" label="Category" />
      <v-text-field v-model="newTask.task" label="Task"></v-text-field>
      <v-text-field v-model="newTask.duration" label="Duration"></v-text-field>
      <v-btn type="submit" @click="validate" block class="mt-2">Submit</v-btn>
      <h4>{{ error }}</h4>
    </v-form>
  </v-card>
</template>

<script setup>
  import { useTaskStore } from '@/stores/taskData.js';
  import { useCategoryStore } from '../stores/category';
  import { ref, reactive } from 'vue';
  import shortId from 'short-uuid';
 
  const taskData = useTaskStore();
  const categoryData = useCategoryStore();
  const error = ref('');
  const emit = defineEmits(['close']);

  const newTask = reactive({
    category: '',
    task: '',
    duration: '',
    id: shortId.uuid()
  });

  const props = defineProps({
    data: { type: Object, default: null}
  });

  const onlyCategoryData = reactive({
    items: categoryData.category
  });
  
  if (props.data) {
    newTask.category = props.data.category;
    newTask.task = props.data.task;
    newTask.duration = props.data.duration;
    newTask.id = props.data.id;
  }

  const validate = () => {
    if (newTask.category === '' || newTask.task === '' || newTask.duration === '') {
      error.value = 'Please fill all the fields';
    }
    else {
      if (props.data) {
        taskData.updateTask(newTask, newTask.id);
      } 
      else {
        taskData.addTask(newTask);
      }
      localStorage.setItem('taskStorage', JSON.stringify(taskData.data.task));
      localStorage.setItem('categoryStorage', JSON.stringify(categoryData.data.items));
      error.value = '';
      emit('close');
    }
  };

</script>

<style scoped>
  .cross {
    cursor: pointer;
    left: 18rem;
    position: relative;
  }
  
  .modal {
    background-color: #673ab5;
    color: white;
    padding: 2rem;
  }
</style>
