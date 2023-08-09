<template>
  <template v-for="ite in props.list" :key="ite.id">
    <el-sub-menu :index="ite.path + ''" v-if="ite.children">
      <template #title>
        <el-icon><Icon :type="ite.meta.icon" /></el-icon>
        <span>{{ ite.meta.title }}</span>
      </template>
      <navItem :list="ite.children"></navItem>
    </el-sub-menu>
    <template v-else>
      <el-menu-item :index="ite.path + ''">
        <el-icon><Icon :type="ite.meta.icon" /></el-icon>
        <span>{{ ite.meta.title }}</span>
      </el-menu-item>
    </template>
  </template>
</template>
  
  <script setup lang="ts">
  import { RouteRecordRawId } from '@/types/router/pages';
defineOptions({
  name: "navItem",
});

interface Props {
  list:RouteRecordRawId[]
}
const props = withDefaults(defineProps<Props>(),{list: () =>[]});
</script>
  
  <style scoped lang="scss">
.children {
  text-indent: 1em;
}
</style>