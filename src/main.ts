import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

// ✅ Captura erros e mostra na tela do celular
window.addEventListener("error", (e) => {
  const div = document.createElement("div");
  div.style.position = "fixed";
  div.style.top = "0";
  div.style.left = "0";
  div.style.width = "100%";
  div.style.background = "red";
  div.style.color = "white";
  div.style.padding = "10px";
  div.style.zIndex = "999999";
  div.style.fontSize = "14px";
  div.innerText = "Erro: " + e.message;
  document.body.appendChild(div);
});

// ✅ Agora monta o app
createApp(App).mount("#app");
