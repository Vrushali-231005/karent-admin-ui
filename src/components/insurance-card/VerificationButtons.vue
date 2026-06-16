<template>
  <div>
    <!-- Verification Action Label -->
    <p class="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-5 mb-3 flex items-center gap-2">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      Verification Action
    </p>

    <div class="flex gap-3">
      <!-- Verified -->
      <button
        @click="emit('verify', true)"
        class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
        :class="
          isVerified
            ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
            : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-green-500/40 hover:text-green-400'
        "
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Verified
      </button>

      <!-- Rejected -->
      <button
        @click="emit('verify', false)"
        class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
        :class="
          !isVerified
            ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
            : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-red-500/40 hover:text-red-400'
        "
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Rejected
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isVerified: boolean;
}>();

const emit = defineEmits<{
  verify: [value: boolean];
}>();
</script>