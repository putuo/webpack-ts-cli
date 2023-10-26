import { createApp } from "vue";
import App from "./App.vue";

// 注意：这里的 #app，需要在 public/index.html 中，写一个 id 为 app 的 div
createApp(App).mount("#app");
