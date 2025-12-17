<script setup lang="ts">
import { Calendar, Mail, MapPin, Phone, Users, Video } from "lucide-vue-next";
import { computed, reactive, ref } from "vue";
import {
  EMAIL,
  WHATSAPP,
  WHATSAPP2,
  WHATSAPP2_DISPLAY,
  WHATSAPP_DISPLAY,
} from "../constants";

// ===============================
// ✅ TIPAGEM DO FORM
// ===============================
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  meetingType: string;
  meetingDate: string | null;
  meetingTime: string | null;
}

// ===============================
// ✅ FORM DATA (CORRETO)
// ===============================
const formData = reactive<ContactFormData>({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  meetingType: "Online",
  meetingDate: null,
  meetingTime: null,
});

// ===============================
// ✅ HORÁRIOS BASE
// ===============================
const baseHours = ["08:00", "10:00", "12:00", "14:00", "16:00"];

// ===============================
// ✅ HORÁRIOS OCUPADOS (EXEMPLO)
// ===============================
const bookedSlots = [
  { date: "2025-12-20", time: "10:00" },
  { date: "2025-12-20", time: "14:00" },
];

// ===============================
// ✅ HORÁRIOS DISPONÍVEIS
// ===============================
const availableHours = computed(() => {
  if (!formData.meetingDate) return [];
  return baseHours.filter(
    (hour) =>
      !bookedSlots.some(
        (slot) => slot.date === formData.meetingDate && slot.time === hour
      )
  );
});

// ===============================
// ✅ VALIDAR DATA
// ===============================
function validateDate() {
  if (!formData.meetingDate) return;

  const date = new Date(formData.meetingDate);
  const day = date.getDay();

  if (day === 0) {
    alert("Domingo não está disponível. Escolha de segunda a sábado.");
    formData.meetingDate = "";
    formData.meetingTime = "";
    return;
  }

  if (availableHours.value.length === 0) {
    const next = suggestNextAvailableDate();
    alert(`Todos os horários estão ocupados nesta data. Sugestão: ${next}`);
    formData.meetingDate = next;
    formData.meetingTime = "";
  }
}

// ===============================
// ✅ SUGERIR PRÓXIMA DATA LIVRE (CORRIGIDO)
// ===============================
function suggestNextAvailableDate(): string {
  let date = new Date(formData.meetingDate ?? "");

  if (isNaN(date.getTime())) {
    date = new Date();
  }

  while (true) {
    date.setDate(date.getDate() + 1);

    const day = date.getDay();
    if (day !== 0) {
      const formatted: string = date.toISOString().split("T")[0]!;

      const hasFreeHours = baseHours.some(
        (hour) =>
          !bookedSlots.some(
            (slot) => slot.date === formatted && slot.time === hour
          )
      );

      if (hasFreeHours) return formatted;
    }
  }
}

// ===============================
// ✅ ERROS + LOADING
// ===============================
const errors = reactive<Record<string, string>>({});
const isSubmitting = ref(false);

// ===============================
// ✅ MÁSCARA DE TELEFONE
// ===============================
const maskPhone = (value: string) => {
  let v = value.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11);

  if (v.length <= 10)
    return v.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");

  return v.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
};

const handlePhoneInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  formData.phone = maskPhone(target.value);
};

// ===============================
// ✅ VALIDAÇÃO
// ===============================
const validateForm = () => {
  errors.name = formData.name.length < 3 ? "Informe seu nome completo." : "";
  errors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ? "Email inválido."
    : "";
  errors.phone =
    formData.phone.replace(/\D/g, "").length < 11 ? "Telefone inválido." : "";
  errors.subject = formData.subject.length < 3 ? "Descreva o assunto." : "";
  errors.message =
    formData.message.length < 10 ? "Explique melhor sua necessidade." : "";

  return !Object.values(errors).some((e) => e);
};

// ===============================
// ✅ MODAL
// ===============================
const showModal = ref(false);

const openModal = () => {
  if (!validateForm()) return;
  showModal.value = true;
};

// ===============================
// ✅ ENVIAR PARA WHATSAPP
// ===============================
const sendToWhatsApp = () => {
  showModal.value = false;
  isSubmitting.value = true;

  const text = `
*Olá, Roberto! Vim pelo site Montoni Tech.*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*WhatsApp:* ${formData.phone}
*Assunto:* ${formData.subject}
*Tipo de Reunião:* ${formData.meetingType}
*Data:* ${formData.meetingDate || "A combinar"}
*Horário:* ${formData.meetingTime || "A combinar"}

*Mensagem:*
${formData.message}
  `.trim();

  const encoded = encodeURIComponent(text);

  const primaryURL = `https://wa.me/${WHATSAPP}?text=${encoded}`;
  const fallbackURL = `https://wa.me/${WHATSAPP2}?text=${encoded}`;

  const win = window.open(primaryURL, "_blank");

  setTimeout(() => {
    if (!win || win.closed || typeof win.closed === "undefined") {
      window.open(fallbackURL, "_blank");
    }
  }, 1200);

  isSubmitting.value = false;
};
</script>

<template>
  <section
    id="contact"
    class="py-16 sm:py-20 bg-slate-950 relative overflow-hidden"
  >
    <!-- Fundo atmosférico -->
    <div class="pointer-events-none absolute inset-0 opacity-10">
      <div
        class="absolute -top-40 -left-20 h-72 w-72 sm:h-96 sm:w-96 bg-purple-700/40 blur-3xl rounded-full"
      ></div>
      <div
        class="absolute -bottom-40 -right-20 h-72 w-72 sm:h-96 sm:w-96 bg-indigo-700/40 blur-3xl rounded-full"
      ></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <!-- Título -->
      <div class="text-center mb-12 sm:mb-16 fade-up">
        <h2
          class="text-sm sm:text-base text-purple-400 font-semibold tracking-wide uppercase"
        >
          Contato & Agendamento
        </h2>

        <p
          class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
        >
          Vamos construir o futuro juntos?
        </p>

        <p class="mt-4 max-w-2xl text-base sm:text-xl text-gray-400 mx-auto">
          Agende uma reunião online ou presencial, ou envie uma mensagem direta.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
        <!-- FORMULÁRIO -->
        <div
          class="bg-slate-900/90 rounded-2xl shadow-xl border border-slate-800 p-6 sm:p-8 fade-left backdrop-blur-md"
        >
          <h3
            class="text-lg sm:text-xl font-bold text-white mb-6 flex items-center"
          >
            <Calendar class="mr-2 text-purple-500" />
            Solicitar Agendamento / Contato
          </h3>

          <form @submit.prevent="openModal" class="space-y-6">
            <!-- Nome + Telefone -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Nome -->
              <div>
                <label class="block text-sm font-medium text-gray-400"
                  >Nome</label
                >
                <input
                  v-model="formData.name"
                  type="text"
                  :class="[
                    'mt-1 block w-full bg-slate-800 border rounded-md py-2.5 px-3 text-white focus:ring-2 focus:ring-purple-500 transition text-sm',
                    errors.name ? 'border-red-500' : 'border-slate-700',
                  ]"
                  placeholder="Seu nome completo"
                />
                <p v-if="errors.name" class="text-xs text-red-400 mt-1">
                  {{ errors.name }}
                </p>
              </div>

              <!-- Telefone -->
              <div>
                <label class="block text-sm font-medium text-gray-400"
                  >WhatsApp / Telefone</label
                >
                <input
                  :value="formData.phone"
                  @input="handlePhoneInput"
                  type="tel"
                  :class="[
                    'mt-1 block w-full bg-slate-800 border rounded-md py-2.5 px-3 text-white focus:ring-2 focus:ring-purple-500 transition text-sm',
                    errors.phone ? 'border-red-500' : 'border-slate-700',
                  ]"
                  placeholder="(22) 9 9999-9999"
                />
                <p v-if="errors.phone" class="text-xs text-red-400 mt-1">
                  {{ errors.phone }}
                </p>
              </div>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-400"
                >Email</label
              >
              <input
                v-model="formData.email"
                type="email"
                :class="[
                  'mt-1 block w-full bg-slate-800 border rounded-md py-2.5 px-3 text-white focus:ring-2 focus:ring-purple-500 transition text-sm',
                  errors.email ? 'border-red-500' : 'border-slate-700',
                ]"
                placeholder="seuemail@empresa.com"
              />
              <p v-if="errors.email" class="text-xs text-red-400 mt-1">
                {{ errors.email }}
              </p>
            </div>

            <!-- Assunto -->
            <div>
              <label class="block text-sm font-medium text-gray-400"
                >Assunto</label
              >
              <input
                v-model="formData.subject"
                type="text"
                :class="[
                  'mt-1 block w-full bg-slate-800 border rounded-md py-2.5 px-3 text-white focus:ring-2 focus:ring-purple-500 transition text-sm',
                  errors.subject ? 'border-red-500' : 'border-slate-700',
                ]"
                placeholder="Ex: Desenvolvimento de sistema, site, app..."
              />
              <p v-if="errors.subject" class="text-xs text-red-400 mt-1">
                {{ errors.subject }}
              </p>
            </div>

            <!-- Tipo de reunião + Data -->
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-800/50 p-4 rounded-lg border border-purple-500/20"
            >
              <!-- Tipo -->
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-2"
                  >Tipo de Reunião</label
                >
                <div
                  class="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0"
                >
                  <label class="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="Online"
                      v-model="formData.meetingType"
                      class="form-radio text-purple-600"
                    />
                    <span class="ml-2 text-gray-300 flex items-center">
                      <Video class="w-4 h-4 mr-1" /> Online
                    </span>
                  </label>

                  <label class="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="Presencial"
                      v-model="formData.meetingType"
                      class="form-radio text-purple-600"
                    />
                    <span class="ml-2 text-gray-300 flex items-center">
                      <Users class="w-4 h-4 mr-1" /> Presencial
                    </span>
                  </label>
                </div>
              </div>

              <!-- Data -->
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1"
                  >Data Preferida</label
                >
                <input
                  type="date"
                  v-model="formData.meetingDate!"
                  @change="validateDate"
                  class="block w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple-500 transition text-sm"
                />
              </div>

              <!-- Horário -->
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1"
                  >Horário Preferido</label
                >
                <select
                  v-model="formData.meetingTime"
                  class="block w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple-500 transition text-sm"
                >
                  <option disabled value="">Selecione um horário</option>
                  <option
                    v-for="hour in availableHours"
                    :key="hour"
                    :value="hour"
                  >
                    {{ hour }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Mensagem -->
            <div>
              <label class="block text-sm font-medium text-gray-400"
                >Mensagem / Detalhes do Projeto</label
              >
              <textarea
                v-model="formData.message"
                rows="4"
                :class="[
                  'mt-1 block w-full bg-slate-800 border rounded-md py-2.5 px-3 text-white focus:ring-2 focus:ring-purple-500 transition text-sm',
                  errors.message ? 'border-red-500' : 'border-slate-700',
                ]"
                placeholder="Conte um pouco sobre sua ideia, objetivos e prazos..."
              ></textarea>
              <p v-if="errors.message" class="text-xs text-red-400 mt-1">
                {{ errors.message }}
              </p>
            </div>

            <!-- Botão -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-md shadow-lg transform transition hover:scale-[1.02] duration-200 flex items-center justify-center gap-2"
            >
              <span v-if="!isSubmitting">Continuar</span>

              <span v-else class="flex items-center gap-2">
                <span
                  class="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
                ></span>
                Enviando...
              </span>
            </button>
          </form>
        </div>

        <!-- PAINEL LATERAL -->
        <div
          class="flex flex-col justify-center space-y-6 sm:space-y-8 fade-right"
        >
          <!-- Email -->
          <div
            class="bg-slate-800 p-5 sm:p-6 rounded-xl border border-slate-700 flex items-start space-x-4"
          >
            <div class="flex-shrink-0 bg-purple-900/50 p-3 rounded-lg">
              <Mail class="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 class="text-lg font-medium text-white">Email</h4>
              <a
                :href="`mailto:${EMAIL}`"
                class="text-gray-400 hover:text-white transition"
                >{{ EMAIL }}</a
              >
              <p class="text-sm text-gray-500 mt-1">Resposta em até 24h.</p>
            </div>
          </div>

          <!-- WhatsApp -->
          <div
            class="bg-slate-800 p-5 sm:p-6 rounded-xl border border-slate-700 flex items-start space-x-4"
          >
            <div class="flex-shrink-0 bg-green-900/50 p-3 rounded-lg">
              <Phone class="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h4 class="text-lg font-medium text-white">
                WhatsApp / Telefone
              </h4>

              <a
                :href="`https://wa.me/${WHATSAPP}`"
                target="_blank"
                class="text-gray-400 hover:text-white transition block"
              >
                {{ WHATSAPP_DISPLAY }} (Principal)
              </a>

              <a
                :href="`https://wa.me/${WHATSAPP2}`"
                target="_blank"
                class="text-gray-400 hover:text-white transition block mt-1"
              >
                {{ WHATSAPP2_DISPLAY }} (Secundário)
              </a>

              <p class="text-sm text-gray-500 mt-1">Atendimento comercial.</p>
            </div>
          </div>

          <!-- Localização -->
          <div
            class="bg-slate-800 p-5 sm:p-6 rounded-xl border border-slate-700 flex items-start space-x-4"
          >
            <div class="flex-shrink-0 bg-blue-900/50 p-3 rounded-lg">
              <MapPin class="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 class="text-lg font-medium text-white">Localização</h4>
              <p class="text-gray-400">Atendemos Online para todo o Brasil.</p>
              <p class="text-gray-400">Presencial: Região dos Lagos, RJ.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 fade-up"
    >
      <div
        class="bg-slate-900 border border-slate-700 rounded-xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
      >
        <h3 class="text-lg sm:text-xl font-bold text-white mb-4">
          Confirmar envio
        </h3>

        <p class="text-gray-300 mb-6 text-sm sm:text-base">
          Confira os dados antes de enviar para o WhatsApp:
        </p>

        <ul class="text-gray-400 text-sm space-y-2 mb-6">
          <li><strong class="text-white">Nome:</strong> {{ formData.name }}</li>
          <li>
            <strong class="text-white">Email:</strong> {{ formData.email }}
          </li>
          <li>
            <strong class="text-white">Telefone:</strong> {{ formData.phone }}
          </li>
          <li>
            <strong class="text-white">Assunto:</strong> {{ formData.subject }}
          </li>
          <li>
            <strong class="text-white">Reunião:</strong>
            {{ formData.meetingType }}
          </li>
          <li>
            <strong class="text-white">Data:</strong>
            {{ formData.meetingDate || "A combinar" }}
          </li>
        </ul>

        <div class="flex justify-end gap-4">
          <button
            @click="showModal = false"
            class="px-4 py-2 rounded-md bg-slate-800 text-gray-300 hover:bg-slate-700 transition"
          >
            Editar
          </button>

          <button
            @click="sendToWhatsApp"
            class="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
