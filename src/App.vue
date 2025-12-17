<template>
  <Navbar />
  <Hero />
  <Services />
  <Technologies />
  <About />
  <Contact />
  <Footer />
</template>

<script setup lang="ts">
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Services from "./components/Services.vue";
import Technologies from "./components/Technologies.vue";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
