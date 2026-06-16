<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
        @click.self="emit('close')"
      >
        <div
          class="relative max-w-2xl w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <img
            :src="imageUrl"
            :alt="PREVIEW_ALT"
            class="w-full object-contain max-h-[85vh] bg-slate-950"
          />
          <button
            class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            @click="emit('close')"
            aria-label="Close preview"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { PREVIEW_ALT } from "./constants";

defineProps<{
  open: boolean;
  imageUrl: string;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>