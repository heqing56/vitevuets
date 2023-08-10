<template>
    <div>泛型</div>
    <div @click="change1(1)">函数泛型{{ showValue }}</div>
    <div @click="change2([1, 2, 3, 4, 5], n => n % 2 === 0)">类型别名泛型{{ showType }}</div>
    <div @click="change3([1, 2, 3, 4, 5], n => n % 2 !== 0)">接口泛型{{ showInterface }}</div>
    <div @click="change4({ val: '潘玮柏' })">泛型约束{{ showExtends }}</div>
    <div @click="change5([1, 2, 3], ['A', 'B', 'C'])">多泛型{{ showGenerics }}</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
    title: '泛型',
    name: 'genericity',
    order: 2
})
const showValue = ref(null)
const showType = ref(null)
const showInterface = ref(null)
const showExtends = ref(null)
const showGenerics = ref(null)
/**函数泛型 */
const change1 = <T>(value: T) => {
    // ...30行
    showValue.value = value
}

/**类型别名泛型 */
type Type<T> = {
    (val: T): boolean
}
const change2 = <R>(arr: R[], callback: Type<R>) => {
    let arrnew: R[] = []
    arr.forEach(element => {
        if (callback(element)) {
            arrnew.push(element)
        }
    });
    showType.value = arrnew
}
/**接口泛型 */
interface InterFn<T> {
    (n: T): boolean
}
const change3 = <R>(a: R[], callback: InterFn<R>) => {

    let arrnew: R[] = []
    a.forEach(i => {
        if (callback(i)) {
            arrnew.push(i)
        }
    })
    showInterface.value = arrnew
}
/**泛型约束 */
interface Extends {
    val: string
}
const change4 = <T extends Extends>(a: T) => {
    showExtends.value = "姓名是：" + a.val
}
/**多泛型 */
const change5 = <T, K>(a: T[], b: K[]) => {
    let arr: (T | K)[] = [...a, ...b]
    showGenerics.value = arr
}
</script>