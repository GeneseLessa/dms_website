import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import * as jQuery from "jquery";

Object.assign(window, { $: jQuery, jQuery });

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
