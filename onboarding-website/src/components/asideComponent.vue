<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <v-card class="mx-auto">
    <v-toolbar class="search">
      <v-text-field v-model="data.search" hide-details label="Search Topics" />
      <template v-slot:prepend>
        <v-avatar class="me-4 mt-2" rounded="0">
          <img src="/src/assets/magnify.svg" alt="" srcset="" />
        </v-avatar>
      </template>
    </v-toolbar>

    <v-list>
      <v-list-item v-for="(item, index) in searching" :key="index" link>
        <template v-slot:prepend>
          <v-avatar class="me-4 mt-2" rounded="0">
            <img :src="item.image" />
          </v-avatar>
        </template>
        <v-list-item-title
          class="text-uppercase font-weight-regular text-caption"
          v-text="item.category"
          @click="filterSearch(item.category)"></v-list-item-title>
        <v-divider></v-divider>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
  import { useCategoryStore } from '../stores/category';
  import { reactive, computed } from 'vue';

  const categoryData = useCategoryStore();
  const emit = defineEmits(['filter']);
  const data = reactive({
    items: categoryData.data.items,
    search: ''
  });

  const  filterSearch = (value) => {
    emit('filter', value);
  }

  const searching = computed(() => {
    if (!data.search) return data.items;
    const search = data.search.toLowerCase();
    return data.items.filter((item) => {
      const text = item.category.toLowerCase();
      return text.indexOf(search) > -1;
    });
  });
</script>

<style scoped>
  .search {
    background-color: #673ab5;
    color: white;
  }
</style>
