// ✅ Logo
import logoFooter from "./assets/logo.png";

// ✅ Imagens usadas no About
import cardImage from "./assets/CardMTS.jpg";
import placeholderHero from "./assets/logo.png";

// ✅ Nome da empresa
export const COMPANY_NAME = "Montoni Soluções Tech";

// ✅ Nome do fundador
export const FOUNDER_NAME = "Roberto Montoni";

// ✅ URLs das redes
export const LINKEDIN_URL = "https://www.linkedin.com/in/robertomontoni";
export const GITHUB_URL = "https://github.com/MontoniSoftwares";

// =========================
// 📞 CONTATOS MONTONI TECH
// =========================
export const WHATSAPP = "5522999998352";
export const WHATSAPP_DISPLAY = "(22) 9 9999-8352";

export const WHATSAPP2 = "5522997992510";
export const WHATSAPP2_DISPLAY = "(22) 9 9799-2510";

export const EMAIL = "montonidev@gmail.com";

// ✅ Imagens centralizadas
export const IMAGES = {
  LOGO_FOOTER: logoFooter,
  CARD_IMAGE: cardImage,
  PLACEHOLDER_HERO: placeholderHero,
};

import {
  BarChart3,
  Blocks,
  Brain,
  BugPlay,
  Code,
  Cpu,
  Database,
  Gamepad2,
  Globe,
  Layers,
  Rocket,
  Server,
  Smartphone,
} from "lucide-vue-next";

export const SERVICES = [
  {
    title: "Desenvolvimento Web",
    description:
      "Aplicações modernas, rápidas e escaláveis para qualquer tipo de negócio.",
    icon: Code,
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Apps nativos e híbridos com performance e experiência premium.",
    icon: Smartphone,
  },
  {
    title: "Infraestrutura & DevOps",
    description: "Pipelines, CI/CD, automações e deploys otimizados.",
    icon: Server,
  },
  {
    title: "Sistemas Corporativos",
    description:
      "Soluções robustas para empresas que precisam de alta disponibilidade.",
    icon: Layers,
  },
  {
    title: "Integrações & APIs",
    description:
      "APIs seguras, rápidas e bem documentadas para conectar sistemas.",
    icon: Globe,
  },
  {
    title: "Banco de Dados",
    description: "Modelagem, otimização e manutenção de bancos SQL e NoSQL.",
    icon: Database,
  },

  // ✅ NOVOS SERVIÇOS

  {
    title: "Blockchain & Web3",
    description:
      "Desenvolvimento de contratos inteligentes, integrações Web3 e soluções descentralizadas.",
    icon: Blocks,
  },
  {
    title: "Automação de Investimentos",
    description:
      "Robôs de trading, algoritmos financeiros e integrações com MetaTrader e TradingView.",
    icon: BarChart3,
  },
  {
    title: "IA & Machine Learning",
    description:
      "Modelos inteligentes, automações com IA e soluções baseadas em dados.",
    icon: Brain,
  },
  {
    title: "Marketing Digital & Growth",
    description:
      "SEO, campanhas, copywriting e estratégias para aumentar tráfego e conversão.",
    icon: Rocket,
  },
  {
    title: "Game Development",
    description:
      "Criação de jogos, protótipos, assets e experiências interativas.",
    icon: Gamepad2,
  },
  {
    title: "Testes Automatizados",
    description:
      "Garantia de qualidade com testes automatizados e pipelines de validação.",
    icon: BugPlay,
  },
  {
    title: "Consultoria & Arquitetura",
    description:
      "Planejamento técnico, arquitetura de sistemas e orientação estratégica.",
    icon: Cpu,
  },
];

// ✅ Tecnologias
export const TECHNOLOGIES = [
  {
    category: "Frontend",
    description: "Interfaces modernas, responsivas e performáticas.",
    items: [
      { name: "React", level: "EXPERT" },
      { name: "Vue 3", level: "EXPERT" },
      { name: "TypeScript", level: "AVANÇADO" },
      { name: "TailwindCSS", level: "AVANÇADO" },
    ],
  },
  {
    category: "Backend & APIs",
    description: "APIs rápidas, seguras e escaláveis.",
    items: [
      { name: "Node.js", level: "EXPERT" },
      { name: "Express", level: "AVANÇADO" },
      { name: "NestJS", level: "INTERMEDIÁRIO" },
    ],
  },
  {
    category: "Mobile",
    description: "Aplicativos performáticos e centrados no usuário.",
    items: [
      { name: "React Native", level: "AVANÇADO" },
      { name: "Expo", level: "INTERMEDIÁRIO" },
    ],
  },
  {
    category: "DevOps & Cloud",
    description: "Entrega contínua e infraestrutura confiável.",
    items: [
      { name: "Docker", level: "AVANÇADO" },
      { name: "GitHub Actions", level: "AVANÇADO" },
      { name: "AWS", level: "INTERMEDIÁRIO" },
      { name: "Vercel", level: "AVANÇADO" },
    ],
  },
  {
    category: "Banco de Dados",
    description: "Modelagem sólida e alta disponibilidade.",
    items: [
      { name: "PostgreSQL", level: "AVANÇADO" },
      { name: "MongoDB", level: "INTERMEDIÁRIO" },
      { name: "Redis", level: "INTERMEDIÁRIO" },
    ],
  },
  {
    category: "Sistemas & Linguagens",
    description: "Soluções robustas e legadas com alta confiabilidade.",
    items: [
      { name: "Delphi", level: "INTERMEDIÁRIO" },
      { name: "C", level: "AVANÇADO" },
      { name: "C++", level: "AVANÇADO" },
      { name: "C#", level: "INTERMEDIÁRIO" },
      { name: "Python", level: "AVANÇADO" },
    ],
  },
  {
    category: "Blockchain & Web3",
    description: "Tecnologias descentralizadas e contratos inteligentes.",
    items: [
      { name: "Solidity", level: "INTERMEDIÁRIO" },
      { name: "Web3.js", level: "INTERMEDIÁRIO" },
      { name: "Rust", level: "BÁSICO" },
      { name: "Ethereum", level: "INTERMEDIÁRIO" },
      { name: "Hardhat", level: "BÁSICO" },
    ],
  },
  {
    category: "Investimentos & Automação",
    description: "Robôs especialistas e estratégias algorítmicas.",
    items: [
      { name: "MQL4", level: "AVANÇADO" },
      { name: "MQL5", level: "AVANÇADO" },
      { name: "MetaTrader", level: "EXPERT" },
      { name: "TradingView", level: "INTERMEDIÁRIO" },
      { name: "Python (dados)", level: "AVANÇADO" },
    ],
  },
  {
    category: "Sistemas Corporativos & ERPs",
    description: "Plataformas corporativas e soluções de gestão empresarial.",
    items: [
      { name: "SAP ABAP", level: "INTERMEDIÁRIO" },
      { name: "TOTVS Protheus (ADVPL)", level: "INTERMEDIÁRIO" },
      { name: "TOTVS RM", level: "INTERMEDIÁRIO" },
      { name: "Oracle E‑Business", level: "BÁSICO" },
      { name: "Dynamics 365", level: "INTERMEDIÁRIO" },
    ],
  },
  {
    category: "IA & Machine Learning",
    description: "Modelos inteligentes e automação baseada em dados.",
    items: [
      { name: "TensorFlow", level: "INTERMEDIÁRIO" },
      { name: "PyTorch", level: "INTERMEDIÁRIO" },
      { name: "Scikit‑Learn", level: "AVANÇADO" },
      { name: "LangChain", level: "INTERMEDIÁRIO" },
      { name: "OpenAI API", level: "AVANÇADO" },
    ],
  },
  {
    category: "Game Development",
    description: "Criação de jogos, engines e experiências interativas.",
    items: [
      { name: "Unity (C#)", level: "INTERMEDIÁRIO" },
      { name: "Unreal Engine (C++)", level: "BÁSICO" },
      { name: "Godot", level: "BÁSICO" },
      { name: "Blender", level: "INTERMEDIÁRIO" },
    ],
  },
  {
    category: "Qualidade & Testes",
    description: "Garantia de qualidade e automação de testes.",
    items: [
      { name: "Jest", level: "AVANÇADO" },
      { name: "Cypress", level: "INTERMEDIÁRIO" },
      { name: "Playwright", level: "INTERMEDIÁRIO" },
      { name: "Selenium", level: "INTERMEDIÁRIO" },
    ],
  },
  {
    category: "Ferramentas de Produtividade",
    description: "Organização, design e colaboração eficiente.",
    items: [
      { name: "Jira", level: "AVANÇADO" },
      { name: "Notion", level: "AVANÇADO" },
      { name: "Figma", level: "AVANÇADO" },
      { name: "Git", level: "AVANÇADO" },
    ],
  },
  {
    category: "Marketing Digital",
    description: "Estratégias de crescimento, tráfego e conversão.",
    items: [
      { name: "SEO", level: "AVANÇADO" },
      { name: "Google Ads", level: "INTERMEDIÁRIO" },
      { name: "Meta Ads", level: "INTERMEDIÁRIO" },
      { name: "Copywriting", level: "AVANÇADO" },
      { name: "Analytics", level: "INTERMEDIÁRIO" },
    ],
  },
];
