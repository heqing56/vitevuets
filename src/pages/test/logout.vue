<template>
  <Buttoncom @click="logouFn">测试退出</Buttoncom>
</template>

<script setup lang="ts">
defineOptions({ name: "testlogout", title: "测试退出" });
import { useRouter } from "vue-router";
import { clearStore } from "@/utils/store";
import { logout } from "@/api/login";
import { Res } from "@/types/api";
const router = useRouter();
const logouFn =async () => {
  const res:Res=await logout() as Res
 
    if (res.code) {
      clearStore();
      router.push("/login");
    }
};
</script>

<style>
</style>