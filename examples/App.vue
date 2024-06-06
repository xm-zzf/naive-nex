<script setup lang="tsx">
import { ref, onMounted } from 'vue'

// import {NEXDialog} from '../lib/index.js'
import { NEXDialog, useNEXDialog } from 'naive-nex'

const nexRef = ref()
const show = ref()
const { show: showDialog } = useNEXDialog({
  title: 'dd',
  options: [],
})


onMounted(() => {
  console.log(nexRef.value);

})

</script>

<template>
  <n-e-x-main>
    <template #head>

      <n-button @click="() => {
        showDialog()

      }">测试useDialog</n-button>
    </template>
    <template #default>
      <n-button @click="show = true">111</n-button>
      <n-e-x-table />

      <NEXDialog ref="nexRef" v-model:show="show">
        1111111
      </NEXDialog>
    </template>
    <template #footer></template>
  </n-e-x-main>
</template>

<style scoped>
.main {
  background-color: #fff;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
