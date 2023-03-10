<script setup lang="ts">
import { computed, ref } from 'vue';

import { Button, Input } from '@/components';
import Summary from './Summary.vue'

const steamUrl = ref('https://steamcommunity.com/profiles/76561198059216394')
const steamUrlInvalidError = computed(() => {
	const steamUrlIdValidator = new RegExp(/^https:\/\/steamcommunity\.com\/id\/[a-zA-Z0-9_]*$/i);
  const steamUrlProfileValidator = new RegExp(/^https:\/\/steamcommunity\.com\/profiles\/[0-9]*$/i);
	const hasError =
		steamUrl
    && !steamUrlIdValidator.test(steamUrl.value)
    && !steamUrlProfileValidator.test(steamUrl.value);
	if (hasError) return "Incorrect format. It must be one of:https://steamcommunity.com/id/USERNAME or https://steamcommunity.com/profiles/ID"
  else return null
});

const onClick = () => {
  console.log('I am scouting now')
}
</script>

<template>
  <main>
    <div class="wrapper-input">
      <Input v-model="steamUrl" :error="steamUrlInvalidError" />
      <Button :label="'Scout'" :onClick="onClick" :disabled="!!steamUrlInvalidError" />
    </div>
    <Summary :steamUrl="steamUrl" />
  </main>
</template>

<style scoped>
  .wrapper-input {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
</style>