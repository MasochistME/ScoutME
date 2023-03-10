<script setup lang="ts">
import { toRefs } from 'vue';
import { ButtonType } from './types';

const props = defineProps<{
  label: string,
  type?: ButtonType,
  onClick: () => void
}>()
const { label, type = 'primary', onClick } = toRefs(props)
</script>

<template>
  <button class="button" @click="onClick">
    {{ label }}
  </button>
</template>

<style scoped>
  .button {
    all: unset;
    font-family: Dosis, Raleway, Verdana, Times, serif;
    text-transform: uppercase;
    padding: 8px 16px;
    background-color: var(--text-primary);
    color: var(--bg-primary);
    border-radius: 8px;
    cursor: pointer;
  }
</style>