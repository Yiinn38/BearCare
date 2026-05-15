<template>
  <div
    class="bg-bearcare-navy/20 flex min-h-screen flex-col items-center justify-center p-4 font-sans text-[#a0a5b1]"
  >
    <div
      class="bg-bearcare-navy/5 w-full max-w-xl rounded-3xl border border-white/5 p-6 shadow-2xl md:p-8"
    >
      <div class="mx-auto mb-6 h-auto w-64">
        <img
          src="/bearcare-logomark.png"
          alt="bearcare-logomark"
          class="h-full w-full object-contain drop-shadow-2xl"
        />
      </div>

      <slot />

      <div v-if="!isSignUpPage" class="my-6 border-t border-white/10"></div>

      <div v-if="!isSignUpPage" class="text-center">
        <h3 class="text-bearcare-slate mb-3 text-sm font-semibold tracking-wider uppercase">
          Select Role
        </h3>

        <div class="inline-flex rounded-xl border border-white/5 bg-white p-1.5">
          <div class="relative grid w-full grid-cols-3">
            <div
              class="bg-bearcare-cyan absolute top-0 left-0 h-full w-1/3 rounded-lg shadow-md transition-transform duration-300 ease-out"
              :style="{ transform: `translateX(${roles.indexOf(activeRole) * 100}%)` }"
            ></div>

            <button
              v-for="role in roles"
              :key="role"
              @click="activeRole = role"
              type="button"
              class="relative z-10 cursor-pointer px-6 py-2.5 text-sm font-medium transition-colors duration-200"
              :class="[
                activeRole === role
                  ? 'text-bearcare-navy font-bold'
                  : 'hover:text-bearcare-navy text-[#a0a5b1]',
              ]"
            >
              {{ role }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="text-bearcare-navy/50 mt-6 flex items-center gap-3 text-sm">
      <IconLock stroke="{1.5}" />
      <span>Conexión cifrada de extremo a extremo.</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useState, computed, useRoute } from '#imports';
import { IconLock } from '@tabler/icons-vue';

const route = useRoute();
const roles = ['User', 'Nurse', 'Doctor'];
const activeRole = useState('authActiveRole', () => 'Doctor');

const isSignUpPage = computed(() => route.path === '/sign-up');
</script>
