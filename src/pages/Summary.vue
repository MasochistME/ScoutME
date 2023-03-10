<script setup lang="ts">
import { useCandidateSummary } from '@/hooks/useCandidateSummary';
import { toRefs } from 'vue';

const props = defineProps<{
  steamUrl: string,
}>()
const { steamUrl } = toRefs(props)

const { data = [] } = useCandidateSummary(steamUrl.value)
console.log(data)

</script>

<template>
  <h3>{{ steamUrl }}</h3>
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