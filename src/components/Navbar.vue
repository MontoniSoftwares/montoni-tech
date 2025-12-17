<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import logo from "../assets/Logo_MS.png";

const isOpen = ref(false);
const scrolled = ref(false);

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Serviços", href: "#services" },
  { name: "Tecnologias", href: "#tech" },
  { name: "Sobre", href: "#about" },
  { name: "Contato", href: "#contact" },
];
</script>

<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      scrolled
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-purple-900/30'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div
          class="flex-shrink-0 flex items-center gap-2 cursor-pointer"
          @click="scrollToTop"
        >
          <div
            class="relative w-12 h-12 overflow-hidden rounded-lg bg-white/10 flex items-center justify-center"
          >
            <img :src="logo" alt="Logo" class="w-full h-full object-contain" />
          </div>

          <span
            class="font-bold text-xl tracking-tight text-white hidden md:block"
          >
            Montoni Tech Soluções
          </span>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a
              v-for="link in navLinks"
              :key="link.name"
              :href="link.href"
              class="text-gray-300 hover:text-white hover:bg-purple-900/50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {{ link.name }}
            </a>

            <a
              href="#contact"
              class="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-medium transition-transform hover:scale-105 shadow-lg shadow-purple-900/50"
            >
              Agendar Reunião
            </a>
          </div>
        </div>

        <!-- Mobile Button -->
        <div class="-mr-2 flex md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700"
          >
            <span class="sr-only">Open main menu</span>
            <span v-if="!isOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="md:hidden bg-slate-900 border-b border-purple-900/30"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click="isOpen = false"
          class="text-gray-300 hover:text-white hover:bg-purple-900/50 block px-3 py-2 rounded-md text-base font-medium"
        >
          {{ link.name }}
        </a>

        <a
          href="#contact"
          @click="isOpen = false"
          class="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-md font-medium mt-4"
        >
          Agendar Reunião
        </a>
      </div>
    </div>
  </nav>
</template>
