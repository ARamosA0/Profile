<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, onBeforeUnmount, ref } from 'vue';

const dot = ref<HTMLElement | null>(null);
const ring = ref<HTMLElement | null>(null);

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
let ringX = 0;
let ringY = 0;
let rafId = 0;

const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

function handleMove(e: MouseEvent) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function loop() {
  dotX = lerp(dotX, mouseX, 0.35);
  dotY = lerp(dotY, mouseY, 0.35);
  ringX = lerp(ringX, mouseX, 0.12);
  ringY = lerp(ringY, mouseY, 0.12);

  if (dot.value) {
    const dotScale = dot.value.classList.contains('is-active') ? 0.85 : 1;
    dot.value.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
  }
  if (ring.value) {
    const ringScale = ring.value.classList.contains('is-hover') ? 1.35 : 1;
    ring.value.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
  }

  rafId = requestAnimationFrame(loop);
}

let interactiveEls: Element[] = [];
const addHover = () => {
  if (ring.value) ring.value.classList.add('is-hover');
  if (dot.value) dot.value.classList.add('is-active');
};
const removeHover = () => {
  if (ring.value) ring.value.classList.remove('is-hover');
  if (dot.value) dot.value.classList.remove('is-active');
};

onMounted(() => {
  window.addEventListener('mousemove', handleMove);
  rafId = requestAnimationFrame(loop);

  // Add hover listeners for common interactive elements so cursor reacts
  interactiveEls = Array.from(
    document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
  );
  interactiveEls.forEach((el) => {
    el.addEventListener('mouseenter', addHover);
    el.addEventListener('mouseleave', removeHover);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMove);
  cancelAnimationFrame(rafId);
  interactiveEls.forEach((el) => {
    el.removeEventListener('mouseenter', addHover);
    el.removeEventListener('mouseleave', removeHover);
  });
});

</script>

<template>
  <RouterView />

  <div class="custom-cursor" aria-hidden="true">
    <div ref="ring" class="custom-cursor__ring"></div>
    <div ref="dot" class="custom-cursor__dot"></div>
  </div>
</template>
