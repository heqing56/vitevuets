<template>
  <div>
    <div>option---------</div>
    <div>state{{ counter }}</div>
    <div>getter{{ doubleCount }}</div>
    <div @click="counter--">点击counter--</div>
    <div @click="increment">点击counter++</div>
    <div>composition------------</div>
    <div>num{{ num }}</div>
    <div>getter{{ numdoubleCount }}</div>
    <div @click="num--">点击num--</div>
    <div @click="numincrement">点击num++</div>
    <Buttoncom @click="logouFn">退出</Buttoncom>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { clearStore } from "@/utils/store";
import { logout } from "@/api/login";
import { useCompositionStore } from '@/storePinia/useCompositionStore'
import { useOptionStore } from '@/storePinia/useOptionStore'
import { storeToRefs } from 'pinia'
import { Res } from "@/types/api";
defineOptions({
  name: "systemlogout",
  title: "退出",
  order: 4,
});
const userStore = useOptionStore()
const compositionStore = useCompositionStore()
// state和getters
const { counter, doubleCount } = storeToRefs(userStore)
const { num, numdoubleCount } = storeToRefs(compositionStore)
// actions 方法
const { increment } = userStore
const { numincrement } = compositionStore
const router = useRouter();
const logouFn =async <T extends Res>() => {
  let res:T=await logout() as T
    if (res.code) {
      clearStore();
      router.push("/login");
    }
};
</script>
