<script setup lang="ts">
import { Github, Linkedin } from "lucide-vue-next";
import { computed } from "vue";
import { COMPANY_NAME, GITHUB_URL, IMAGES, LINKEDIN_URL } from "../constants";

const currentYear = new Date().getFullYear();
const displayYear = computed(() => (currentYear < 2025 ? 2025 : currentYear));

function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement | null;
  if (img) {
    img.src = "https://via.placeholder.com/50x50/2e1065/ffffff?text=MS";
  }
}
</script>

<template>
  <footer class="bg-slate-950 border-t border-purple-900/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col items-center justify-between md:flex-row gap-8">
        <!-- LOGO -->
        <div class="flex items-center space-x-4">
          <div class="overflow-hidden rounded bg-white/5 p-2">
            <img
              :src="IMAGES.LOGO_FOOTER"
              alt="Logo Footer"
              class="mx-auto w-20 sm:w-24 md:w-28 h-auto object-contain"
              @error="handleImageError"
            />
          </div>

          <span
            class="text-xl font-bold text-white tracking-wide text-center md:text-left"
          >
            {{ COMPANY_NAME }}
          </span>
        </div>

        <!-- SOCIALS -->
        <div class="flex space-x-8">
          <a
            :href="LINKEDIN_URL"
            target="_blank"
            rel="noreferrer"
            class="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <Linkedin class="h-7 w-7 sm:h-8 sm:w-8" />
          </a>

          <a
            :href="GITHUB_URL"
            target="_blank"
            rel="noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
          >
            <Github class="h-7 w-7 sm:h-8 sm:w-8" />
          </a>
        </div>
      </div>

      <!-- COPYRIGHT -->
      <div class="mt-10 border-t border-slate-800 pt-8 text-center">
        <p class="text-base text-gray-500">
          &copy; {{ displayYear }} Montoni Soluções Tech. Todos os direitos
          reservados.
        </p>

        <p class="text-xs text-gray-600 mt-2">
          Desenvolvido com Paixão e Código Limpo.
        </p>
      </div>
    </div>
  </footer>
</template>
