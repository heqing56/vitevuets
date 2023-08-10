<template>
  <div class="content" v-for="(item, index) in list" :key="index">{{ item }}</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { des } from '@/api/about'
import { Res } from '@/types/api';
defineOptions({
  name: 'about',
  title: '关于我',
  icon: 'User',
  order: 2,
})

let list = reactive<string[]>([])

const getDesFn =async <T extends Res<string[]>>() => {
  const res :T=await des() as T
  console.log(res)
    if (res.code) {
      list.push(...res.data) 
    }
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
