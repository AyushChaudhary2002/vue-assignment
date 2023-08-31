import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskData', () => {
  const data = reactive({
    task: []
  });

  const addTask = (newTask) => {
    data.task.push(newTask);
  }

  const getData = (value) => {
    if (value && value !== 'ALL') {
      return data.task.filter((task) => task.category === value);
    } else {
      return data.task;
    }
  };

  const updateTask = (newTask, id) => {
    const index = data.task.findIndex((task) => task.id === id);
    data.task[index] = newTask;
  }

  return { addTask, data, getData, updateTask };
});
