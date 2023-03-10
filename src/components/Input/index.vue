<script setup lang="ts">
import { computed, toRefs } from 'vue';

const props = defineProps<{
  modelValue: string,
  error: string | null;
}>()
const emit = defineEmits(['update:modelValue'])
const { error } = toRefs(props)
const hasError = computed(() => error.value !== null)
</script>

<template>
  <div class="wrapper">
    <input
      type="text"
      class="input"
      :class="{ error: hasError }"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target?.value)"
    >
    <div class="info-error" v-if="hasError">{{ error }}</div>
  </div>
</template>

<style scoped>
.wrapper {
  display:flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-width: 600px;
}
.input {
  all: unset;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid var(--bg-secondary);
  background-color: var(--bg-tertiary);
  box-sizing: border-box;
  color: var(--text-tertiary);
}
.input.error {
  border: 2px dashed var(--semantic-error);
}

.info-error {
  color: var(--semantic-error);
  font-size: 0.9em;
}
</style>