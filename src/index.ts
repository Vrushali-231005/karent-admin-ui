import { createApp } from "vue";
import App from "./app.vue";
import "./styles/main.css";
createApp(App).mount("#app");

import InsuranceCard from "./components/insurance-card/InsuranceCard.vue";

export default {
  id: "insurance-card",
  name: "Insurance Card",
  icon: "verified",
  component: InsuranceCard,
  types: ["json"],
};