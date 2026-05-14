<template>
  <div
    class="bg-bearcare-slate flex min-h-screen flex-col items-center justify-center p-4 font-sans text-[#a0a5b1]"
  >
    <div
      class="border-bearcare-slate bg-skyblue-bearcare/ w-full max-w-xl rounded-3xl border p-8 shadow-2xl md:p-12"
    >
      <div class="mb-10 text-center">
        <img src="/bearcare-logomark.png" alt="" />
      </div>

      <slot />

      <div class="border-bearcare-slate my-10 border-t"></div>

      <div class="text-center">
        <h3 class="mb-4 text-sm font-semibold tracking-wider text-[#737885] uppercase">
          Select Role
        </h3>
        <div class="border-bearcare-slate inline-flex rounded-xl border bg-[#10141f] p-1.5">
          <button
            v-for="role in roles"
            :key="role"
            @click="activeRole = role"
            type="button"
            class="rounded-lg px-6 py-2.5 text-sm font-medium transition-colors duration-200"
            :class="[
              activeRole === role
                ? 'bg-[#181d29] text-white shadow-md'
                : 'text-[#a0a5b1] hover:text-white',
            ]"
          >
            {{ role }}
          </button>
        </div>
      </div>
    </div>

    <div class="mt-8 flex items-center gap-3 text-sm text-[#737885]">
      <IconLock stroke="{2}" />
      <span>End-to-end encrypted connection</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useState } from '#imports';
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-vue';

const roles = ['Doctor', 'Nurse', 'Admin'];
const activeRole = useState('authActiveRole', () => 'Doctor');
</script>
