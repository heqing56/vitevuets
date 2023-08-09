<template>
  <div class="nav">
    <el-menu :default-active="path" class="el-menu-vertical-demo" router>
      <NavItem :list="list"></NavItem>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, reactive, ref } from "vue";
import { useRoute,RouteLocationNormalizedLoaded } from "vue-router";

import pages from "@/router/pages";
import { RouteRecordRawId } from "@/types/router/pages";
const route:RouteLocationNormalizedLoaded = useRoute();
const path = ref<string>("/");
const list = reactive<RouteRecordRawId[]>(
 pages,
);
onBeforeMount(() => {
  path.value = route.path;
});
</script>

<style scoped lang="scss">
.nav {
  border-right: 1px solid var(--el-border-color);
  box-sizing: border-box;
  user-select: none;
}

.el-menu {
  border: none;
}
</style>