<template>
  <div>
    <!-- Insurance Document Label -->
    <p class="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-3 flex items-center gap-2">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Insurance Document
    </p>

    <!-- File Row -->
    <div
      class="flex items-center gap-4 bg-slate-800 rounded-xl px-4 py-3 border border-slate-700 cursor-pointer hover:border-violet-500/50 transition-colors"
      @click="emit('preview')"
    >
      <!-- Thumbnail -->
      <div class="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-slate-700">
        <img :src="imageUrl" :alt="THUMBNAIL_ALT" class="w-full h-full object-cover" />
      </div>

      <!-- Labels -->
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-white">{{ INSURANCE_FILE_LABEL }}</p>
        <p class="text-xs text-violet-400 mt-0.5 flex items-center gap-1">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Click to preview full document
        </p>
      </div>

      <!-- Arrow icon -->
      <svg class="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { INSURANCE_FILE_LABEL, THUMBNAIL_ALT } from "./constants";

defineProps<{
  imageUrl: string;
}>();

const emit = defineEmits<{
  preview: [];
}>();
</script>