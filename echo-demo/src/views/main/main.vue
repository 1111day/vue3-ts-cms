<template>
    <div class="main">
        <el-container class="mainContainer">
            <el-aside style="width: 230px;">
                <Menu></Menu>
            </el-aside>
            <el-container>
                <el-header>
                    <Hearder></Hearder>
                </el-header>
                <el-main style="background-color:#580124;">内容</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Menu from '@/components/main-menu/mainMenu.vue'
import Hearder from '@/components/mainHearder/mainHearder.vue'
</script>
<style lang="less" scoped>
.main {
    height: 100vh;
    width: 100vw;

    .mainContainer {
        height: 100%;
    }
}
</style>
