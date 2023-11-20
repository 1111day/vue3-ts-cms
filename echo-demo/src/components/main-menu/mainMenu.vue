<template>
    <div class="menu">
        <div class="MenuTitle">
            <h2>Echo的老巢</h2>
        </div>
        <div class="MenuContent">
            <el-menu background-color="#3292ec" active-text-color="#ffffff" text-color="#eeeeee">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>系统总览</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1">核心技术</el-menu-item>
                        <el-menu-item index="2">商品统计</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>

            </el-menu>
        </div>
    </div>
</template>

<script setup lang="ts">

const data = []
</script>
<style lang="less" scoped>
.menu {
    height: 100%;
    background-color: #3292ec;
}

.MenuTitle {
    color: rgb(242, 240, 255);
    display: flex;
    height: 28px;
    padding: 15px 10px 8px 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    font-weight: 700;
    user-select: none;
}

.el-sub-menu {
    .el-menu-item {
        padding-left: 50px !important;
    }

    .el-menu-item:hover {
        font-weight: 600;
    }

    .el-menu-item.is-active {
        font-weight: 700;
        color: #fff;
        background-color: rgba(16, 19, 196, 0.65);
    }
}
</style>
