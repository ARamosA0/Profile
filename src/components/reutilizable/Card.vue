<template>
    <div class="rounded-xl overflow-hidden border border-border bg-bg-surface max-w-md hover:shadow-lg transition-shadow duration-300 hover:border-accent">
        <img
        :src="props.img"
        :alt="props.title"
        class="w-full h-72 object-cover"
        />

        <div class="p-8 flex flex-col items-start">
        <span class="text-accent font-semibold uppercase tracking-wider text-sm">
            {{ props.tipo }}
        </span>

        <h3 class="text-text-primary text-3xl font-bold mt-4">
            {{ props.title }}
        </h3>

        <a
            href="#"
            class="text-text-primary text-lg mt-6 flex items-center gap-2 hover:text-accent transition-colors"
        >
            Ver caso de estudio
            <span>→</span>
        </a>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    img: string
    tipo: string
    title: string
}>()
</script>   