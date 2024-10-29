<!--
  @author: Norbert Podbiegly (github.com/norelockk)
  @project: Projekt Community
  @updated: 10/29/2024 @ 8:32 AM
-->

<script lang="ts" setup>
import TextPosts from './bottom/TextPosts.vue';
</script>

<template>
  <footer :class="$style['bottom']">
    <div :class="$style['content']">
      <!-- test -->
      <TextPosts />
    </div>
  </footer>
</template>

<style lang="scss" module scoped>
.bottom {
  @apply w-full text-slate-200 flex justify-center items-center py-4;
  position: fixed;
  bottom: 0;
  left: 0;
}

.content {
  @apply flex flex-col items-center text-xs md:text-sm p-4;
  max-width: 1000px;
  width: 100%;
}
</style>