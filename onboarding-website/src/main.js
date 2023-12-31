import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { mdiAccount } from '@mdi/js';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from './App.vue';
import 'vuetify/styles';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      account: mdiAccount
    },
    sets: {
      mdi
    }
  },
  components,
  directives
});

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);

app.mount('#app');
