<template>
  <div class="login">
    <div class="card loginForm">
      <h2 class="title">登录</h2>
      <el-form ref="ruleFormRef"  :rules="rules" :model="form" label-width="60px" class="demo-ruleForm">
        <el-form-item label="账号" prop="name" >
          <el-input v-model.number="form.name" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password" >
          <el-input v-model.number="form.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="desc">注：账号密码随便填</div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { reactive, ref } from "vue";
import { login } from "@/api/login";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import type { FormInstance, FormRules } from 'element-plus'
import { RuleForm } from "@/types/views/login";
const store = useStore();
const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const form = reactive<RuleForm>({
  name: "", 
  password: null
})
const rules = reactive<FormRules<RuleForm>>({
  name:[{ required: true, message: '账号必填' }],
  password:[{ required: true, message: '密码必填' }]
})
const submitForm = (formEl:FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid, fields) => {
    if (valid) {
     login({ name: form.name }).then((res:any) => {
        if (res.code===1) {
          const user = res.data.userInfo;
          store.commit("setToken", res.data.token);
          store.commit("setUserInfo", {...user,name:form.name});
          router.push("/");
        }
      });
    } else {
      console.log("error submit!", fields);
    }
  });
}

</script>
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: url(../assets/imgs/bglogin.jpg) no-repeat;
  background-size: cover;
}

.loginForm {
  width: 420px;
  background: #fff;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  padding: 40px 40px;
}

.title {
  border-bottom: 5px solid orange;
  margin-bottom: 30px;
}

.btn {
  margin-top: 30px;
  width: 100%;
}

.desc {
  font-size: 12px;
  text-indent: 2em;
}
</style>