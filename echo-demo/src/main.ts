import { createApp } from "vue";
import registerIconFn from "@/global/regiterIcon";
import { createPinia } from "pinia";
import "normalize.css";
import "./assets/css/index.less";
import ElementPlus from "element-plus";
import VueParticles from "vue3-particles";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(registerIconFn);
app.use(ElementPlus);
app.use(VueParticles);
app.mount("#app");
