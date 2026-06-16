<template>
  <div class="bg-slate-900 rounded-2xl p-5 border border-slate-800">
    <InsurancePreview :image-url="imageUrl" @preview="lightboxOpen = true" />

    <VerificationButtons :is-verified="isVerified" @verify="handleVerify" />

    <InsuranceLightbox :open="lightboxOpen" :image-url="imageUrl" @close="lightboxOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InsurancePreview from "./InsurancePreview.vue";
import VerificationButtons from "./VerificationButtons.vue";
import InsuranceLightbox from "./InsuranceLightbox.vue";
import { useInsurance } from "./useInsurance";

const props = defineProps<{
  value: Record<string, any>;
}>();

const emit = defineEmits<{
  "update:value": [value: Record<string, any>];
}>();

const { imageUrl, isVerified } = useInsurance(props.value);

const lightboxOpen = ref(false);

function handleVerify(val: boolean) {
  emit("update:value", { ...props.value, isVerified: val });
}
</script>