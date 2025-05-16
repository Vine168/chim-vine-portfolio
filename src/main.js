import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS with custom settings
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false,
  offset: 50,
});

createApp(App).mount("#app");
