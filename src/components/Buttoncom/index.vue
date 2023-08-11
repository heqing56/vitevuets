<template>
  <el-button @click="clickFn" :loading="state.loading" v-bind="$attrs">
    <slot></slot>
  </el-button>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import debounce from "@/utils/debounce";
const emit = defineEmits(["click"])

const newClick = debounce(() => {
  emit("click");
  state.loading = false;
}, 500);
const state = reactive({
  loading: false,

});
const clickFn=()=> {
    state.loading = true;
    newClick();
  }
</script>

<style></style>