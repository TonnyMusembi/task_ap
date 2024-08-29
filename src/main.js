import { createApp } from "vue";
// import './style.css'
import router from "./router/index.js";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";

import "./styles/app.css";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount("#app");
