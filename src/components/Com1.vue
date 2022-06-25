<template>
  <div class="my-2">
    你的目标是
  </div>
  <div class="my-2">
    <a-input-number v-model:value="data.tarNum"></a-input-number>
    个
    <a-input-number v-model:value="data.tarLev"></a-input-number>
    级
  </div>
  <div>
    你现在有
  </div>
  <div class="d-flex flex-wrap align-items-center">
    <div v-for="i in maxNum" class="d-flex m-2 align-items-center">
      <div>{{ i }}级：</div>
      <a-input-number v-model:value="data.have[i-1]"></a-input-number>
    </div>
  </div>
  <div>
    那么你需要{{result || 'NA'}}个
    <a-input-number v-model:value="data.needLev"></a-input-number>
    级
  </div>
</template>

<script lang="ts" setup>

import { computed, defineEmits, reactive } from 'vue';

const emits = defineEmits(['update:modelValue'])

const maxNum = 15

type dataType = {
  tarNum?: number
  tarLev?: number
  have: number[]
  needLev?: number
}
const data = reactive<dataType>({
  have: []
})

const result = computed(() => {
  let result
  if (data.tarNum && data.tarLev && data.needLev) {
    if (data.needLev > data.tarLev) {
      result = 0
    } else {
      result = data.tarNum * Math.pow(2, data.tarLev - data.needLev)
      for (let i = data.needLev; i < data.tarLev; i++) {
        result -= Math.pow(2, i - data.needLev) * (data.have[i - 1] | 0)
      }
    }
  }
  return result
})
</script>