<!--
  @author: Norbert Podbiegly (github.com/norelockk)
  @project: Projekt Community
  @updated: 10/29/2024 @ 8:32 AM
-->

<script setup lang="ts">
// Wrapper
import Wrapper from './components/Wrapper.vue';

// Overlay components
import Header from './components/Overlay/Header.vue';
import Bottom from './components/Overlay/Bottom.vue';
</script>

<style lang="scss">
body {
  // development mode if on chrome instead OBS or else
  &.dev {
    @apply bg-slate-900;
  }
}
</style>

<template>
  <Wrapper>
    <Header>
      <div>hi</div>
    </Header>

    <Bottom />
  </Wrapper>
</template>