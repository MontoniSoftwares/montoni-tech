<script setup lang="ts">
import { SERVICES } from "../constants.ts";
</script>

<template>
  <section id="services" class="py-16 sm:py-20 bg-slate-900 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- HEADER -->
      <div class="text-center">
        <h2
          class="text-base text-purple-400 font-semibold tracking-wide uppercase"
        >
          O que fazemos
        </h2>

        <p
          class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
        >
          Soluções Tecnológicas Completas
        </p>

        <p class="mt-4 max-w-2xl text-lg sm:text-xl text-gray-400 mx-auto">
          Da concepção ao deploy, entregamos software de qualidade para
          impulsionar seu negócio.
        </p>
      </div>

      <!-- GRID -->
      <div class="mt-14 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, index) in SERVICES"
          :key="index"
          class="relative group bg-slate-800 p-6 rounded-xl border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20 hover:border-purple-500/50 active:scale-[0.98] sm:hover:scale-105"
        >
          <!-- ICON -->
          <div>
            <span
              class="rounded-lg inline-flex p-4 sm:p-3 bg-purple-900/30 text-purple-400 ring-4 ring-slate-900 transition-colors group-hover:text-white group-hover:bg-purple-600"
            >
              <component
                :is="service.icon"
                class="h-7 w-7 sm:h-6 sm:w-6"
                aria-hidden="true"
              />
            </span>
          </div>

          <!-- TEXT -->
          <div class="mt-6 sm:mt-8">
            <h3
              class="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors"
            >
              {{ service.title }}
            </h3>

            <p class="mt-2 text-sm text-gray-400 leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
