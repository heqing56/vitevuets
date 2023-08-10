<template>
    <div>点击操作</div>
    {{ setArr }}
    <div @click="chengeFn">{{ name }}</div>
    <div @click="debounceFn">防抖{{ num }}</div>
    <div @click="throttleeFn">节流{{ num }}</div>
</template>
<script setup lang="ts">
import debounce from '@/utils/debounce'
import throttle from '@/utils/throttle'
import { onMounted, reactive, ref } from 'vue'
defineOptions({
    name: 'optionpai',
    title: '防抖节流',
    order:3
})
const name = ref<string>('张三')
const num = ref<number>(1)
const setArr = reactive<number[][]>([])
const debounceFn = debounce(() => num.value--, 500)
const throttleeFn = throttle(() => num.value++, 500)

const chengeFn = () => {
    name.value = '瓜娃子'
}
onMounted(() => {
    let arr:number[][] = [[1, 2, 3, 4], [2, 3, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]
    let newArr:number[][] = [...new Set(arr.map(item => item.join()))].map(item => {
        return item.split(',').map(it => ~~it)
    })
    setArr.push(...newArr)
},)
</script>
