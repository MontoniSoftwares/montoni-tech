<script setup lang="ts">
import { ArrowRight, Calendar } from "lucide-vue-next";
</script>

<template>
  <section id="home" class="relative bg-slate-900 overflow-hidden pt-20">
    <!-- Background Blobs -->
    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        class="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
      ></div>
      <div
        class="absolute top-40 -left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-80 h-80 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <!-- LEFT TEXT -->
        <div
          class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
        >
          <div
            class="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-300 text-sm font-semibold mb-6"
          >
            <span
              class="flex h-2 w-2 bg-purple-400 rounded-full mr-2 animate-pulse"
            ></span>
            Inovação em cada linha de código
          </div>

          <h1
            class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span class="block xl:inline">Transforme suas ideias</span>
            <span
              class="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500"
            >
              em Realidade Digital
            </span>
          </h1>

          <p
            class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
            Desenvolvimento Fullstack de alta performance. Web Apps, Sistemas
            Corporativos e Aplicativos Mobile com as tecnologias mais modernas
            do mercado.
          </p>

          <!-- BUTTONS -->
          <div
            class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg shadow-lg shadow-purple-900/50 transition-all hover:scale-105"
            >
              <Calendar class="w-5 h-5 mr-2" />
              Agendar Reunião
            </a>

            <a
              href="#services"
              class="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 bg-transparent hover:bg-gray-800 md:py-4 md:text-lg transition-all"
            >
              Nossos Serviços
              <ArrowRight class="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        <!-- RIGHT CODE BLOCK -->
        <div
          class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
        >
          <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <div
              class="relative block w-full bg-gradient-to-br from-purple-900 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20"
            >
              <div
                class="p-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"
              ></div>

              <div class="p-6">
                <div class="flex space-x-2 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div class="space-y-3 font-mono text-sm">
                  <div class="flex">
                    <span class="text-purple-400 mr-2">const</span>
                    <span class="text-blue-400">montoniTech</span>
                    <span class="text-white mx-2">=</span>
                    <span class="text-yellow-300">{</span>
                  </div>

                  <div class="pl-4 flex">
                    <span class="text-gray-400 mr-2">founder:</span>
                    <span class="text-green-400">"Roberto Montoni"</span>,
                  </div>

                  <div class="pl-4 flex">
                    <span class="text-gray-400 mr-2">mission:</span>
                    <span class="text-green-400">"Innovation"</span>,
                  </div>

                  <div class="pl-4 flex">
                    <span class="text-gray-400 mr-2">technologies:</span>
                    <span class="text-blue-300">[</span>
                    <span class="text-green-400">"React"</span>,
                    <span class="text-green-400">"Vue"</span>,
                    <span class="text-green-400">"Node"</span>
                    <span class="text-blue-300">]</span>
                  </div>

                  <div class="text-yellow-300">}</div>

                  <div class="pt-2 flex">
                    <span class="text-purple-400">await</span>
                    <span class="text-blue-400 ml-2"
                      >montoniTech.buildFuture()</span
                    >;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
