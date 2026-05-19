// src/main.js
import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";
import "./styles.css";

import VueFeather from "vue-feather";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDownload,
  faFileCode,
  faTerminal,
  faPhone,
  faLocationDot,
  faGlobe,
  faGlobeAsia,
  faClock,
  faLightbulb,
  faBrain,
  faHandshake,
  faBriefcase,
  faUsers,
  faTrain,
  faCloud,
  faRocket,
  faEnvelope,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import {
  faBootstrap,
  faTelegram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// ADD TO LIBRARY (tech stack icons REMOVED)
library.add(
  faLinkedin,
  faEnvelope,
  faDownload,
  faFileCode,
  faTerminal,
  faBootstrap,
  faPhone,
  faLocationDot,
  faGlobe,
  faGlobeAsia,
  faClock,
  faLightbulb,
  faBrain,
  faHandshake,
  faBriefcase,
  faUsers,
  faTrain,
  faRocket,
  faTelegram,
  faCloud,
  faGithub,
  faStar
);

const app = createApp(App);
const head = createHead();
app.use(router);
app.use(head);

app.component(VueFeather.name, VueFeather);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
