<script setup lang="ts">
import { Github, Linkedin, Mail } from "lucide-vue-next";
import { onMounted } from "vue";
import { FOUNDER_NAME, IMAGES } from "../constants";

const microcards = [
  "+14 anos de experiência",
  "Especialista Fullstack",
  "Sistemas Corporativos",
  "Web Apps & Mobile",
  "Infraestrutura & DevOps",
  "Performance e Escalabilidade",
];

const timeline = [
  {
    year: "2010",
    title: "Primeiros passos na tecnologia",
    desc: "Início da jornada estudando programação, lógica e desenvolvimento web.",
  },
  {
    year: "2014",
    title: "Primeiros projetos reais",
    desc: "Criação de sites e sistemas personalizados para pequenos negócios.",
  },
  {
    year: "2018",
    title: "Consolidação como Fullstack Developer",
    desc: "Atuação profissional com foco em aplicações modernas e APIs escaláveis.",
  },
  {
    year: "2021",
    title: "Entrada no mercado corporativo",
    desc: "Desenvolvimento de sistemas internos, CRMs, ERPs e integrações complexas.",
  },
  {
    year: "2023",
    title: "Fundação da Montoni Tech",
    desc: "Nascemos com a missão de transformar desafios reais em soluções digitais de alta performance.",
  },
  {
    year: "2024",
    title: "Expansão para soluções completas",
    desc: "Web Apps, Mobile, Infraestrutura, Consultoria e produtos digitais end‑to‑end.",
  },
  {
    year: "2025",
    title: "Expansão e consolidação da Montoni Tech",
    desc: "Ampliação do portfólio de soluções digitais, novos clientes corporativos e evolução da estrutura tecnológica da empresa.",
  },
  {
    year: "2026",
    title: "Arquiteturas avançadas e automações inteligentes",
    desc: "Evolução das soluções da Montoni Tech com foco em IA aplicada, automações corporativas e arquiteturas distribuídas de alta performance.",
  },
];

onMounted(() => {
  window.addEventListener("scroll", () => {
    const offset = window.scrollY * 0.05;
    document.documentElement.style.setProperty(
      "--parallax-offset",
      `${offset}px`
    );
  });
});
</script>

<template>
  <section id="about" class="relative py-24 bg-slate-950 overflow-hidden">
    <!-- Fundo atmosférico -->
    <div class="pointer-events-none absolute inset-0 opacity-30">
      <div
        class="absolute -top-40 -left-20 h-72 w-72 bg-purple-700/40 blur-3xl rounded-full atmosphere"
      ></div>
      <div
        class="absolute -bottom-40 -right-20 h-72 w-72 bg-blue-700/30 blur-3xl rounded-full atmosphere"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
        <!-- Card do Fundador -->
        <div class="relative -mt-40 mb-10 lg:mb-0 parallax mx-auto">
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-900/40 transform hover:rotate-0 transition-all duration-700 mx-auto"
          >
            <img
              :src="IMAGES.CARD_IMAGE"
              alt="Montoni Tech Card"
              class="w-full object-cover"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"
            ></div>

            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-2xl font-bold text-white">{{ FOUNDER_NAME }}</h3>
              <p class="text-purple-400">CEO & Fullstack Developer</p>
            </div>
          </div>
        </div>

        <!-- Texto -->
        <div>
          <h2
            class="text-3xl sm:text-4xl font-extrabold text-white mb-6 fade-up"
          >
            Sobre a Montoni Tech
          </h2>

          <div class="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p class="fade-up">
              Sou <strong class="text-purple-400">{{ FOUNDER_NAME }}</strong
              >, fundador da Montoni Tech Soluções. Desde 2010 atuo no
              desenvolvimento de software, transformando desafios reais em
              soluções digitais de alta performance.
            </p>

            <p class="fade-up">
              Com experiência sólida em desenvolvimento Fullstack, atuo na
              criação de Web Apps modernos, sistemas corporativos (CRM, ERP,
              automações internas), integrações complexas e Landing Pages de
              alta conversão.
            </p>

            <p class="fade-up">
              Trabalhamos com tecnologias modernas como
              <span class="text-purple-300 font-medium">React</span>,
              <span class="text-purple-300 font-medium">Vue 3</span>,
              <span class="text-purple-300 font-medium">Node.js</span>,
              <span class="text-purple-300 font-medium">Python</span> e
              infraestrutura em nuvem.
            </p>

            <p class="fade-up">
              Acreditamos que tecnologia deve ser simples, eficiente e elegante.
            </p>
          </div>

          <!-- Ícones sociais -->
          <div class="mt-8 flex space-x-6 fade-up">
            <a
              href="https://www.linkedin.com/in/robertomontoni"
              target="_blank"
              rel="noreferrer"
              class="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Linkedin class="w-8 h-8" />
            </a>

            <a
              href="https://github.com/MontoniSoftwares"
              target="_blank"
              rel="noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <Github class="w-8 h-8" />
            </a>

            <a
              href="mailto:montonidev@gmail.com"
              class="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Mail class="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      <!-- Microcards -->
      <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div
          v-for="(item, i) in microcards"
          :key="item"
          class="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-center text-gray-200 text-sm font-medium stagger"
          :style="{ animationDelay: `${i * 0.15}s` }"
        >
          {{ item }}
        </div>
      </div>

      <!-- Timeline -->
      <div class="-mt-16 parallax pb-48">
        <h3 class="text-center text-2xl font-bold text-white mb-10 fade-up">
          Minha Jornada
        </h3>

        <div class="relative max-w-3xl mx-auto">
          <!-- Linha vertical -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-600 rounded-full opacity-40"
          ></div>

          <div class="space-y-6">
            <div
              v-for="(item, index) in timeline"
              :key="item.year"
              class="relative flex items-start gap-6"
              :class="
                index % 2 === 0
                  ? 'flex-row fade-left'
                  : 'flex-row-reverse fade-right'
              "
            >
              <!-- Ponto -->
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-purple-500 pulse-glow"
              ></div>

              <!-- Card -->
              <div
                class="w-1/2 bg-slate-900/70 border border-slate-800 rounded-xl p-5 backdrop-blur-sm shadow-lg"
              >
                <h4 class="text-purple-300 font-semibold text-lg">
                  {{ item.year }}
                </h4>
                <p class="text-white font-medium">{{ item.title }}</p>
                <p class="text-gray-400 text-sm mt-1">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
