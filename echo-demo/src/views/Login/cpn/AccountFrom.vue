<template>
    <div class="AccountFrom">
        <el-form label-width="80px" ref="FormData" :rules="rules" :model="formLogin" style="max-width: 370px">
            <el-form-item label="账号" size="large" prop="name">
                <el-input v-model="formLogin.name" />
            </el-form-item>
            <el-form-item label="密码" size="large" prop="password">
                <el-input show-password type="password" v-model="formLogin.password" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { localCache } from '@/utils/cache'
import Loginstroe from '@/stores/login/index'
import { ElMessage, type ElForm } from 'element-plus'
const rules = {
    name: [{ required: true, message: '账号不能为空', trigger: 'blur' },],
    password: [{ required: true, message: '密码不能为空', trigger: 'blur' },]
}
const FormData = ref<InstanceType<typeof ElForm>>()
const formLogin = reactive({
    name: '',
    password: '',
})
const useLoginStore = Loginstroe()
//因为数据在from中登录逻辑应该在这里发起
function LoginClick(isKeep: boolean) {
    FormData.value?.validate((isValid, message) => {
        if (isValid) {
            const name = formLogin.name
            const password = formLogin.password
            useLoginStore.LoginActionFn({
                name,
                password
            }).then((item) => {
                if (isKeep) {
                    localCache.setCacheFn('name', name)
                    localCache.setCacheFn('password', password)
                }
            })
        } else {
            ElMessage.error('账号或密码不符合规则')
        }
    })
}
defineExpose({
    LoginClick
})

</script>
<style lang="less" scoped>
.AccountFrom {
    :deep(.el-form-item__label) {
        font-weight: 650;
        color: rgb(79, 237, 79);
        font-size: 22px;
    }
}
</style>
