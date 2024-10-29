<!--
  @author: Norbert Podbiegly (github.com/norelockk)
  @project: Projekt Community
  @updated: 10/29/2024 @ 8:32 AM
-->

<style lang="scss" module scoped>
.wrapper {
  @apply flex flex-col;
  @apply relative h-screen w-full;
}
</style>

<template>
  <div :class="$style.wrapper">
    <slot />
  </div>
</template>