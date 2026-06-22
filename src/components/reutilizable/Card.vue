<template>
        <router-link :to="to || '#'" class="block">
            <div class="group rounded-xl border border-border bg-surface  transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_12px_24px_var(--accent-glow)]">
        <div class="overflow-hidden">
            <img
                :src="props.img"
                alt="Imagen del proyecto"
                class="w-full h-48 object-cover opacity-50 transition-all duration-500 group-hover:opacity-100"
            >
        </div>

        <div class="p-8 flex flex-col items-start">
        <span class="text-accent font-semibold uppercase tracking-wider text-sm">
            {{ props.tipo }}
        </span>

        <h3 class="text-text-primary text-3xl font-bold mt-4">
            {{ props.title }}
        </h3>

        <div class="text-text-primary text-lg mt-6 flex items-center gap-2">
            <span class="mr-2">Ver caso de estudio</span>
            <span>→</span>
        </div>
        </div>
      </div>
    </router-link>
</template>
<script setup lang="ts">

const props = defineProps<{
    img: string
    tipo: string
    title: string
    to?: string
}>()
</script>   