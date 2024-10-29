<!--
  @author: Norbert Podbiegly (github.com/norelockk)
  @project: Projekt Community
  @updated: 10/29/2024 @ 8:32 AM
-->

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const time = ref<string>('12:00 AM');

const timeOptions: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
  timeZone: 'America/New_York',
};
let timeInterval: ReturnType<typeof setInterval> | null = null;

function formatTime() {
  time.value = new Intl.DateTimeFormat('en-US', timeOptions).format(new Date());
}

onMounted(() => {
  formatTime();
  timeInterval = setInterval(formatTime, 1000);
});

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval);
});
</script>

<style lang="scss" module scoped>
.logo {
  background: url(../../../assets/img/graffiti-texture.png) center / cover;
  @apply w-16 h-16 flex p-1 rounded-md justify-start bg-black scale-105 ml-4;

  &::before {
    content: '';
    @apply w-16 h-auto;
    background: url(../../../assets/img/logo.png) no-repeat center / cover;
  }

  .ticker {
    background: url(../../../assets/img/splat-texture.png) center / cover no-repeat;

    animation: lt 60s infinite linear;
    @apply absolute w-full text-white text-xs flex items-center justify-center bg-black rounded-3xl;
    bottom: -1.75rem;
    left: -0.05rem;
    height: 1.5rem;
    padding: 0.20rem;

    .rotating {
      @apply inline-block overflow-hidden align-bottom;
      height: 1.2em;
      line-height: 1.2em;
      text-shadow: none;

      .rotate {
        @apply inline-block;
        animation: rotate 15s infinite;
      }
    }

    .live {
      @apply flex items-center text-red-500 uppercase text-center font-black ml-1;

      .pulse {
        @apply w-2 h-2 bg-red-500 rounded-full mr-1;
        animation: pulse 1s infinite;
      }
    }
  }
}

@keyframes rotate {
  from,
  0%,
  10%,
  20% {
    opacity: 1;
    transform: translateY(0);
  }

  30%,
  40%,
  50%,
  60%,
  70%,
  80% {
    opacity: 1;
    transform: translateY(-29px);
  }

  80%,
  90%,
  100%,
  to {
    transform: translateY(0);
  }
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

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>

<template>
  <div :class="$style['logo']">
    <div :class="$style['ticker']">
      <div :class="$style['rotating']">
        <div :class="$style['rotate']">
          <span :class="$style['live']"><span :class="$style['pulse']"></span> Live</span> <br>
          <span v-text="time"></span> <br>
        </div>
      </div>
    </div>
  </div>
</template>