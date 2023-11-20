<template>
    <div class="panel">
        <h2 class="title">ECHO的老巢</h2>
        <AccountFrom ref="AcFrom"></AccountFrom>
        <div class="controls">
            <el-checkbox label="记住密码" size="large" v-model="isKeep" />
            <el-link :underline="false" @click="ForGet">忘记密码</el-link>
        </div>
        <el-button class="Login_btn" @click="handleLogin" size="large">即刻登录</el-button>

    </div>
</template>

<script setup lang="ts">
import AccountFrom from './AccountFrom.vue';
import { localCache } from '@/utils/cache'
import { ref, watch } from 'vue'
const isKeep = ref(false)
const AcFrom = ref<InstanceType<typeof AccountFrom>>()
const ForGet = function () {
    isKeep.value = false
    localCache.clear()
}
const handleLogin = function () {
    AcFrom.value?.LoginClick(isKeep.value)
}
</script>
<style lang="less" scoped>
.panel {
    user-select: none;
    width: 430px;
    font-size: 30px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 9px;

    .title {
        color: rgb(69, 210, 170);
        text-align: center;
        font-size: 40px;
        margin: 20px 0 25px 0;
    }

    .controls {
        margin: 0 60px 0 40px;
        display: flex;
        justify-content: space-between;

        :deep(.el-checkbox__label) {
            font-size: 13px;
            color: #51ff41;
            font-weight: 700;
        }

        :deep(.el-link__inner) {
            font-size: 13px;
            color: rgb(124, 248, 240);
            font-weight: 700;
        }
    }

    .Login_btn {
        margin: 20px auto;
        display: flex;
        width: 80%;
        color: rgb(33, 255, 255);
        font-size: 20px;
        font-weight: 600;
        border: #33ffff solid 1px;
        background-color: rgba(33, 255, 255, 0.1);
    }

    .Login_btn:hover {
        color: #ffffff;
        border: #62ffff solid 3.5px;
    }
}
</style>
