<template>
    <div class="Hearder">
        <div class="HDBtn">
            <el-icon size="32">
                <Fold />
            </el-icon>
        </div>
        <div class="HDContent">
            <div class="Crumbs">面包屑</div>
            <div class="HMessage">信息</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
<style lang="less" scoped>
.Hearder {
    height: 100%;
    display: flex;
    width: 100%;
    align-items: center;

    .HDBtn {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .HDContent {
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
}
</style>
