<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <v-card class=" search-bar mx-auto" >
    <v-toolbar color="primary" >
      <v-text-field
        v-model="data.search"
        clearable
        hide-details
        label="Search Topics"
        single-line />
        <template v-slot:prepend>
        <v-avatar class="me-4 mt-2" rounded="0">
        <img src="/src/assets/magnify.svg" alt="" srcset="">
        </v-avatar>
        </template>
    </v-toolbar>

  

    <v-list>
      <v-list-item v-for="(item, i) in searching" :key="i" link>
        <template v-slot:prepend>
          <v-avatar class="me-4 mt-2" rounded="0">
            <img :src="item.image" >
          </v-avatar>
        </template>

        <v-list-item-title
          class="text-uppercase font-weight-regular text-caption"
          v-text="item.category"
        ></v-list-item-title>
        <v-divider></v-divider>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { reactive, computed } from 'vue';
const data = reactive({
    items: [
      {
        image: '/src/assets/html.svg',
        category: 'Html'
      },
      {
        image: '/src/assets/css.svg',
        category: 'Css'
      },
      {
        image: '/src/assets/javaScript.svg',
        category: 'Javascript'
      },
      {
        image: '/src/assets/vue.svg',
        category: 'Vue.Js'
      }
    ],
    search: ''
  })

 const searching = computed(() => {
    if (!data.search) return data.items

    const search = data.search.toLowerCase()

    return data.items.filter((item) => {
      const text = item.category.toLowerCase()

      return text.indexOf(search) > -1
    })
  })
</script>
