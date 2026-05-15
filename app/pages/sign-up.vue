<template>
  <div>
    <Title>Crear Cuenta</Title>
    <h2 class="text-bearcare-navy mb-4 text-center text-xl font-bold uppercase">Crear Cuenta</h2>

    <form @submit.prevent="handleSignUp" class="space-y-4">
      <div>
        <label for="fullname" class="text-bearcare-cyan mb-2 block text-sm font-bold">
          Nombre Completo
        </label>
        <input
          id="fullname"
          v-model="form.fullName"
          type="text"
          required
          placeholder="Ingresa tu nombre"
          class="text-bearcare-slate focus:border-bearcare-cyan focus:ring-bearcare-cyan w-full rounded-lg border border-white/10 bg-zinc-100 px-4 py-3 placeholder-[#737885] transition focus:ring-1 focus:outline-none"
        />
      </div>

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

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

        <div>
          <label for="confirmPassword" class="text-bearcare-cyan mb-2 block text-sm font-bold">
            Confirmar Contraseña
          </label>
          <div class="relative">
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              required
              placeholder="••••••••"
              class="text-bearcare-slate focus:border-bearcare-cyan focus:ring-bearcare-cyan w-full rounded-lg border border-white/10 bg-zinc-100 py-3 pr-12 pl-4 placeholder-[#737885] transition focus:ring-1 focus:outline-none"
            />
            <button
              type="button"
              @click="showConfirmPassword = !showConfirmPassword"
              class="hover:text-bearcare-cyan absolute top-1/2 right-3 -translate-y-1/2 text-[#737885] transition-colors"
            >
              <IconEye v-if="showConfirmPassword" stroke="{1.5}" />
              <IconEyeClosed v-else stroke="{1.5}" />
            </button>
          </div>
        </div>
      </div>

      <p v-if="passwordMismatch" class="text-sm font-medium text-red-500">
        Las contraseñas no coinciden
      </p>

      <div class="pt-2">
        <label for="terms" class="group flex cursor-pointer items-center gap-3">
          <input
            id="terms"
            v-model="form.acceptTerms"
            type="checkbox"
            required
            class="peer sr-only"
          />

          <div
            class="border-bearcare-navy/30 peer-checked:border-bearcare-cyan peer-checked:bg-bearcare-cyan peer-focus:ring-bearcare-cyan group-hover:border-bearcare-cyan/50 flex h-5 w-5 items-center justify-center rounded border-2 bg-zinc-100 transition-all peer-focus:ring-2 peer-focus:ring-offset-2"
          >
            <IconCheck
              class="text-bearcare-navy h-3.5 w-3.5 opacity-0 transition-opacity peer-checked:opacity-100"
              stroke="{3}"
            />
          </div>

          <span
            class="text-bearcare-navy group-hover:text-bearcare-cyan text-sm font-medium transition-colors"
          >
            Acepto los términos y condiciones
          </span>
        </label>
      </div>

      <button
        type="submit"
        :disabled="isLoading || passwordMismatch || !form.acceptTerms"
        class="bg-bearcare-cyan text-bearcare-navy hover:bg-opacity-90 mt-4 w-full rounded-lg px-4 py-3 font-bold shadow-lg transition disabled:cursor-not-allowed disabled:opacity-50"
      >
        {{ isLoading ? 'Registrando...' : 'Crear Cuenta' }}
      </button>
    </form>

    <div class="text-bearcare-navy mt-6 text-center text-sm">
      ¿Ya tienes cuenta?
      <NuxtLink
        to="/login"
        class="text-bearcare-cyan hover:text-bearcare-navy font-bold transition-colors"
      >
        Inicia sesión aquí
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { IconEyeClosed, IconEye, IconCheck } from '@tabler/icons-vue';

definePageMeta({ layout: 'register' });

const form = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
});

const isLoading = ref(false);

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const passwordMismatch = computed(() => {
  return (
    form.value.password &&
    form.value.confirmPassword &&
    form.value.password !== form.value.confirmPassword
  );
});

const handleSignUp = async () => {
  if (passwordMismatch.value) return;
  isLoading.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  } finally {
    isLoading.value = false;
  }
};
</script>
