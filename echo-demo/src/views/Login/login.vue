<template>
    <div class="login">
        <panel></panel>
        <vue-particles id="tsparticles" :particlesInit="particlesInit" :options="option" />
    </div>
</template>

<script setup lang="ts">
import { loadFull } from 'tsparticles';
import { option } from './data/Particles'
import panel from './cpn/panel.vue';
// ParticlesInit初始化
const particlesInit = async function (engine: any) {
    await loadFull(engine)
}
</script>
<style lang="less" scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    #tsparticles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -20;
    }
}
</style>
