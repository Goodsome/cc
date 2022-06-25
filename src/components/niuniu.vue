<script setup>

import { ref } from 'vue'
import _ from 'lodash'
import { message } from 'ant-design-vue'

defineProps({
  msg: String
})

const pokes = ref([])
const count = ref(0)

console.log(1)
function calNiu(pokes) {
  const value = []
  for(var i=0; i<5; i++) {
    if (pokes[i] !== undefined) {
      value.push(pokes[i])
    }
  }
  if (value.length === 5) {
    for (var a=0; a<5; a++) {
      for (var b=a+1; b<5; b++) {
        for (var c=b+1; c<5; c++) {
          const result = value[a] + value[b] + value[c]
          if (result % 10 === 0) {
            const de = _.difference([0, 1, 2, 3, 4], [a, b, c])
            const result_2 = (value[de[0]] + value[de[1]]) % 10
            if (result_2 === 0) {
              return '牛牛!'
            } else {
              return '牛' + result_2
            }
          }
        }
      }
    }
  }
  return '没牛2'
}

function test() {
  message.error('12321')
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <div>
    <a-input-number
      v-for="n in 5"
      :key="n"
      v-model:value="pokes[n-1]"
      :min="1"
      :max="10"
      style="margin: 5px"
    />
  </div>
  <div>{{ calNiu(pokes) }}</div>
  <a-button type="primary" @click="test">test</a-button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
