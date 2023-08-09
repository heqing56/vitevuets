<template>
  <div class="header">
    <div>
      <div>名字还没有想好</div>
    </div>
    <div class="right">
      <el-avatar :size="30" :src="userInfo.headerImg" />
      <div @click="myinfoFn" style="margin: 10px;">{{ userInfo.name }}</div>
      <div @click="logoutFn">退出</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { logout } from '@/api/login'
import { clearStore } from '@/utils/store'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()
const userInfo = reactive({
  name: store.state.login.userInfo.name,
  headerImg: store.state.login.userInfo.headerImg,

})
const logoutFn=()=>{
  logout().then((res:any) => {
    if (res.code) {
      clearStore()
      router.push('/login')
    }
  })
}
const myinfoFn=()=>{
  router.push('/system/user/myinfo')
}
</script>

<style scoped lang="scss">
.header {
  padding: 0 10px;
  box-sizing: border-box;
}

.right {
  display: flex;
  font-size: $font-size-base;
  text-align: right;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
</style>