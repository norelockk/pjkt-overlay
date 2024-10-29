<!--
  @author: Norbert Podbiegly (github.com/norelockk)
  @project: Projekt Community
  @updated: 10/29/2024 @ 8:32 AM

  So it is supposed to display text, like Twitter posts
-->

<style lang="scss" scoped module>
.text {
  @apply flex relative mb-6 px-6 py-2 w-full justify-between items-center;
  min-height: 2.5rem;

  &::before {
    content: '';
    background: radial-gradient(19.49% 58.52% at 50% 0%, rgba(249, 196, 60, 0.3) 0%, rgba(231, 166, 1, 0) 100%), radial-gradient(50% 50% at 100% 100%, rgb(82, 10, 235) 10.27%, rgba(159, 115, 255, 0) 100%), radial-gradient(77.86% 77.86% at 100% 0%, rgb(0, 167, 255) 0%, rgba(0, 166, 254, 0.12) 100%), radial-gradient(50% 50% at 0% 0%, rgb(255, 141, 108) 0%, rgba(255, 92, 0, 0.6) 100%), radial-gradient(70.24% 70.24% at 0% 100%, rgb(232, 29, 114) 0%, rgba(255, 0, 0, 0) 100%);
    filter: blur(50px);
    @apply absolute inset-0 bg-black;
    transform: skewY(-15deg) rotate(15deg);
    z-index: -1;
    border-radius: 4px;
  }

  &::after {
    content: '';
    background: url(../../../assets/img/graffiti-texture.png) center / 900px no-repeat;
    animation: lt 120s infinite linear;
    @apply absolute inset-0 bg-black;
    transform: skewY(-15deg) rotate(15deg);
    z-index: -1;
    border-radius: 4px;
  }

  color: white;
  font-weight: bold;
  line-height: 1.4;
  position: relative;
}

@keyframes lt {
  0% {
    background-position: 0px;
  }

  50% {
    background-position: 6px 1px;
  }

  100% {
    background-position: 0px;
  }
}
</style>

<style lang="css" scoped>
.text-enter-active,
.text-leave-active {
  transition: all 1s ease;
}

.text-enter-from,
.text-leave-to {
  width: 0;
  opacity: 0;
  /* transform: translateY(120px); */
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);

setInterval(() => {
  show.value = !show.value;
}, 15000);
</script>

<template>
  <Transition name="text" mode="out-in">
    <div :class="$style['text']" v-if="show">
      <Vue3Marquee :gradient="false">
        <span>@norelockmusic: It's cool! #pjkt</span>
      </Vue3Marquee>
    </div>
  </Transition>
</template>
