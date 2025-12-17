<script setup lang="ts">
import { Github, Linkedin, Mail } from "lucide-vue-next";
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
</script>

<template>
  <section
    id="about"
    class="relative py-20 sm:py-24 bg-slate-950 overflow-hidden"
  >
    <!-- Fundo atmosférico -->
    <div
      class="pointer-events-none absolute inset-0 opacity-30 hidden sm:block"
    >
      <div
        class="absolute -top-40 -left-20 h-56 w-56 sm:h-72 sm:w-72 bg-purple-700/40 blur-3xl rounded-full"
      ></div>
      <div
        class="absolute -bottom-40 -right-20 h-56 w-56 sm:h-72 sm:w-72 bg-blue-700/30 blur-3xl rounded-full"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- GRID PRINCIPAL -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- CARD DO FUNDADOR (Opção B) -->
        <div class="w-full flex justify-center lg:justify-start">
          <div
            class="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-purple-900/40 bg-slate-900/60 backdrop-blur-md"
          >
            <img
              :src="IMAGES.CARD_IMAGE"
              alt="Montoni Tech Card"
              class="w-full object-cover"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"
            ></div>

            <div class="p-6">
              <h3 class="text-2xl font-bold text-white">{{ FOUNDER_NAME }}</h3>
              <p class="text-purple-400">CEO & Fullstack Developer</p>
            </div>
          </div>
        </div>

        <!-- TEXTO -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Sobre a Montoni Tech Soluções
          </h2>

          <div class="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Sou <strong class="text-purple-400">{{ FOUNDER_NAME }}</strong
              >, fundador da Montoni Tech Soluções. Desde 2010 atuo no
              desenvolvimento de software, transformando desafios reais em
              soluções digitais de alta performance para empresas, profissionais
              e startups. Com experiência sólida em desenvolvimento Fullstack,
              atuo na criação de Web Apps modernos, sistemas corporativos (CRM,
              ERP, automações internas), integrações complexas, APIs de alta
              disponibilidade, Landing Pages de conversão e aplicativos mobile
              com foco em performance e experiência do usuário.
            </p>

            <p>
              Ao longo da jornada, evoluímos para oferecer soluções completas
              que incluem DevOps & Cloud, infraestrutura automatizada, pipelines
              CI/CD, otimização de bancos de dados, arquitetura de sistemas,
              além de áreas avançadas como Blockchain & Web3, IA & Machine
              Learning, automação de investimentos, testes automatizados e
              consultoria técnica estratégica. Trabalhamos com tecnologias
              modernas e consolidadas como React, Vue 3, Node.js, TypeScript,
              Python, Docker, AWS, PostgreSQL, MongoDB, além de stacks
              especializadas como Solidity, TensorFlow, MQL5, Unity, entre
              outras — sempre escolhendo a ferramenta ideal para cada projeto.
            </p>

            <p>
              Trabalhamos com tecnologias modernas como
              <span class="text-purple-300 font-medium">React</span>,
              <span class="text-purple-300 font-medium">Vue 3</span>,
              <span class="text-purple-300 font-medium">Node.js</span>,
              <span class="text-purple-300 font-medium">Python</span>.
            </p>

            <p>
              Acreditamos que tecnologia deve ser simples, eficiente e elegante,
              entregando resultados reais, escaláveis e alinhados ao momento de
              cada cliente.
            </p>
          </div>

          <!-- Ícones sociais -->
          <div class="mt-8 flex space-x-6">
            <a
              href="https://www.linkedin.com/in/robertomontoni"
              target="_blank"
              class="text-gray-400 hover:text-blue-500"
            >
              <Linkedin class="w-8 h-8" />
            </a>
            <a
              href="https://github.com/MontoniSoftwares"
              target="_blank"
              class="text-gray-400 hover:text-white"
            >
              <Github class="w-8 h-8" />
            </a>
            <a
              href="mailto:montonidev@gmail.com"
              class="text-gray-400 hover:text-red-500"
            >
              <Mail class="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      <!-- MICROCARD GRID -->
      <div class="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div
          v-for="item in microcards"
          :key="item"
          class="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-center text-gray-200 text-sm font-medium"
        >
          {{ item }}
        </div>
      </div>

      <!-- TIMELINE -->
      <div class="mt-20 pb-32">
        <h3 class="text-center text-2xl font-bold text-white mb-10">
          Minha Jornada
        </h3>

        <div class="relative max-w-3xl mx-auto">
          <div
            class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-600 rounded-full opacity-40"
          ></div>

          <div class="space-y-10">
            <div
              v-for="item in timeline"
              :key="item.year"
              class="relative flex flex-col sm:flex-row items-start gap-6"
            >
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-purple-500 shadow-lg"
              ></div>

              <div
                class="w-full sm:w-1/2 bg-slate-900/70 border border-slate-800 rounded-xl p-5 backdrop-blur-sm shadow-lg mx-auto"
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
