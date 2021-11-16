import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "@/assets/scss/_common.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Primevue from "primevue/config";

const app = createApp(App);
app.use(router);
app.use(Primevue);
app.mount("#app");

// エラーハンドリン
window.addEventListener("error", (event) => {});
