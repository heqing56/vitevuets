<template>
  <div class="content" v-for="(item, index) in state.list" :key="index">{{ item }}</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { des } from '@/api/about'
defineOptions({
  name: 'about',
  title: '关于我',
  icon: 'User',
  order: 2,
})
interface State{
  list:string[]
}
const state = reactive<State>({
  list: [],
})
const getDesFn = () => {
  des().then((res: any) => {
    if (res.code) {
      state.list = res.data
    }
  })
}
getDesFn()

</script>
<style scoped>
.content {
  text-indent: 2em;
  padding: 10px;
  line-height: 32px;
  letter-spacing: 1.8px;
}
</style>
