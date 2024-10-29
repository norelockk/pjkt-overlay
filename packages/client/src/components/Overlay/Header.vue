<!--
  @author: Norbert Podbiegly (github.com/norelockk)
  @project: Projekt Community
  @updated: 10/29/2024 @ 8:32 AM
-->

<style lang="scss" module scoped>
.header {
  @apply flex relative p-8 h-32 w-full items-center overflow-hidden;

  .divider {
    @apply flex w-full h-full;
  }
}
</style>

<script lang="ts" setup>
import Logo from './heading/Logo.vue';
import Ticker from './heading/Ticker.vue';
</script>

<template>
  <div :class="$style['header']">
    <div :class="$style['divider']"></div>

    <Ticker />
    <Logo />
  </div>
</template>
