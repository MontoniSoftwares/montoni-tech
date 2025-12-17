<script setup lang="ts">
import {
  Cloud,
  Code2,
  Cpu,
  Database,
  Server,
  Smartphone,
} from "lucide-vue-next";
import { computed } from "vue";
import { TECHNOLOGIES } from "../constants";

const categoryIcons: Record<string, any> = {
  Frontend: Code2,
  "Backend & APIs": Server,
  Mobile: Smartphone,
  "DevOps & Cloud": Cloud,
  "Banco de Dados": Database,
  "Sistemas & Linguagens": Code2,
  "Blockchain & Web3": Code2,
  "Investimentos & Automação": Code2,
  "Sistemas Corporativos & ERPs": Code2,
  "IA & Machine Learning": Code2,
  "Game Development": Code2,
  "Qualidade & Testes": Code2,
  "Ferramentas de Produtividade": Code2,
  "Marketing Digital": Code2,
};

const hasCategories = computed(
  () => Array.isArray(TECHNOLOGIES) && TECHNOLOGIES.length > 0
);
</script>

<template>
  <section
    id="tech"
    class="relative py-20 bg-slate-950 border-y border-purple-900/20 overflow-hidden"
  >
    <!-- Glow de fundo -->
    <div class="pointer-events-none absolute inset-0 opacity-60">
      <div
        class="absolute -top-40 -right-32 h-72 w-72 rounded-full bg-purple-700/30 blur-3xl"
      />
      <div
        class="absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl"
      />
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Cabeçalho -->
      <div class="text-center mb-12">
        <p
          class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400/80 mb-3"
        >
          <Cpu class="w-4 h-4" />
          Stack Tecnológica
        </p>

        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-3">
          Tecnologias que impulsionam seus projetos
        </h2>

        <p class="text-gray-400 max-w-2xl mx-auto">
          Utilizamos uma combinação estratégica de ferramentas modernas para
          entregar soluções com alta performance, segurança e escalabilidade —
          sempre alinhadas ao momento da sua empresa.
        </p>
      </div>

      <!-- Grid de categorias -->
      <div
        v-if="hasCategories"
        class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="(group, index) in TECHNOLOGIES"
          :key="group.category"
          class="relative group rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-5 sm:p-6 flex flex-col gap-4 shadow-[0_18px_45px_rgba(15,23,42,0.55)] hover:border-purple-500/70 hover:bg-slate-900/90 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(88,28,135,0.55)]"
          :style="{ transitionDelay: `${index * 60}ms` }"
        >
          <!-- Glow lateral -->
          <div
            class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <div
              class="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/10"
            />
          </div>

          <!-- Cabeçalho da categoria -->
          <header class="flex items-center gap-3 z-10">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-900/40 border border-purple-500/50 text-purple-200 shadow-[0_0_25px_rgba(168,85,247,0.6)] group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.9)] transition-shadow duration-300"
            >
              <component
                :is="categoryIcons[group.category] || Code2"
                class="w-5 h-5"
              />
            </div>

            <div>
              <h3 class="text-white font-semibold text-lg">
                {{ group.category }}
              </h3>
              <p class="text-xs text-gray-400">
                {{ group.description }}
              </p>
            </div>
          </header>

          <!-- Microcards das tecnologias -->
          <div class="flex flex-wrap gap-2 mt-2 z-10">
            <div
              v-for="tech in group.items"
              :key="tech.name"
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700/80 text-gray-200 text-xs shadow-sm cursor-default select-none group-hover:border-purple-500/70 group-hover:bg-purple-900/30 transition-colors duration-300"
            >
              <span
                class="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)]"
              />
              <span class="font-medium">
                {{ tech.name }}
              </span>
              <span
                class="text-[10px] uppercase tracking-wide text-purple-300/80"
              >
                {{ tech.level }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- Fallback (se TECHNOLOGIES estiver vazio) -->
      <div v-else class="text-center text-gray-500 text-sm mt-8">
        Stack tecnológica em atualização. Em breve mais detalhes sobre as
        ferramentas que usamos nos seus projetos.
      </div>

      <!-- Frase final -->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-400 max-w-xl mx-auto">
          Especialistas em ecossistemas e conectando fronteiras entre frontend,
          backend, infraestrutura e banco de dados para entregar soluções
          completas — do conceito ao deploy em produção.
        </p>
      </div>
    </div>
  </section>
</template>
