import { computed } from "vue";

export function useInsurance(value: Record<string, any> | undefined) {
  const imageUrl = computed(() => {
    return value?.images?.[0]?.image || "";
  });

  const isVerified = computed(() => {
    return value?.isVerified ?? false;
  });

  return {
    imageUrl,
    isVerified,
  };
}