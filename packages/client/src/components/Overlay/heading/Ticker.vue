<style lang="scss" module scoped>
.ticker {
  width: 640px;
  background: url(../../../assets/img/splat-texture.png) center / cover no-repeat;
  animation: splat 60s infinite linear;
  @apply flex transition-all duration-500 h-full items-start text-slate-200 bg-black rounded-md relative;

  &::before {
    content: '';
    background: radial-gradient(19.49% 58.52% at 50% 0%, rgba(249, 196, 60, 0.3) 0%, rgba(231, 166, 1, 0) 100%), radial-gradient(50% 50% at 100% 100%, rgb(82, 10, 235) 10.27%, rgba(159, 115, 255, 0) 100%), radial-gradient(77.86% 77.86% at 100% 0%, rgb(0, 167, 255) 0%, rgba(0, 166, 254, 0.12) 100%), radial-gradient(50% 50% at 0% 0%, rgb(255, 141, 108) 0%, rgba(255, 92, 0, 0.6) 100%), radial-gradient(70.24% 70.24% at 0% 100%, rgb(232, 29, 114) 0%, rgba(255, 0, 0, 0) 100%);
    filter: blur(20px);
    @apply absolute inset-0;
    z-index: -1;
    border-radius: 4px;
  }

  .content {
    @apply w-full h-full relative p-5 pl-0 pr-0;

    span {
      @apply font-extrabold uppercase;
    }
  }
}

@keyframes splat {
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
.ticker-enter-active,
.ticker-leave-active {
  transition: all 1s ease;
}

.ticker-enter-from,
.ticker-leave-to {
  width: 0px !important;
  /* opacity: 1; */
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);

setInterval(() => {
  show.value = !show.value;
}, 30000);
</script>

<template>
  <Transition mode="out-in" name="ticker">
    <div :class="$style['ticker']" v-if="show">
      <div :class="$style['content']">
        <Vue3Marquee :gradient="false">
          <span>Next coming up: Admin Panel</span>
        </Vue3Marquee>
      </div>
    </div>
  </Transition>
</template>