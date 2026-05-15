<template>
  <div>
    <Title>Inicio de Sesión</Title>
    <h2 class="text-bearcare-navy mb-4 text-center text-xl font-bold uppercase">Iniciar Sesión</h2>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label for="email" class="text-bearcare-cyan mb-2 block text-sm font-bold">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="tu@email.com"
          class="text-bearcare-slate focus:border-bearcare-cyan focus:ring-bearcare-cyan w-full rounded-lg border border-white/10 bg-zinc-100 px-4 py-3 placeholder-[#737885] transition focus:ring-1 focus:outline-none"
        />
      </div>

      <div>
        <label for="password" class="text-bearcare-cyan mb-2 block text-sm font-bold">
          Contraseña
        </label>

        <div class="relative">
          <input
            id="password"
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            required
            placeholder="••••••••"
            class="text-bearcare-slate focus:border-bearcare-cyan focus:ring-bearcare-cyan w-full rounded-lg border border-white/10 bg-zinc-100 py-3 pr-12 pl-4 placeholder-[#737885] transition focus:ring-1 focus:outline-none"
          />

          <button
            type="button"
            @click="showPassword = !showPassword"
            class="hover:text-bearcare-cyan absolute top-1/2 right-3 -translate-y-1/2 text-[#737885] transition-colors"
          >
            <IconEye v-if="showPassword" stroke="{1.5}" />
            <IconEyeClosed v-else stroke="{1.5}" />
          </button>
        </div>
      </div>

      <button
        type="submit"
        :disabled="isLoading"
        class="bg-bearcare-cyan text-bearcare-navy hover:bg-opacity-90 mt-2 w-full rounded-lg px-4 py-3 font-bold shadow-lg transition disabled:cursor-not-allowed disabled:opacity-50"
      >
        {{ isLoading ? 'Iniciando...' : 'Iniciar Sesión' }}
      </button>
    </form>

    <div class="text-bearcare-navy mt-6 text-center text-sm">
      ¿No tienes cuenta?
      <NuxtLink
        to="/sign-up"
        class="text-bearcare-cyan hover:text-bearcare-navy font-bold transition-colors"
      >
        Regístrate aquí
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IconEyeClosed, IconEye } from '@tabler/icons-vue';

definePageMeta({ layout: 'register' });

const form = ref({ email: '', password: '' });
const isLoading = ref(false);

const showPassword = ref(false);

const handleLogin = async () => {
  isLoading.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  } finally {
    isLoading.value = false;
  }
};
</script>
