<template>
    <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 my-50">
        <div class="my-8 flex flex-col gap-3 text-left">
            <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary">Proyectos Destacados</h2>
            <p class="text-base text-text-secondary max-w-3xl">Una selección de nuestro trabajo reciente, donde la estrategia y el diseño se encuentran con la tecnología.</p>
        </div>

        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            <div v-for="p in proyecto" :key="p.title" class="w-full ">
                <Card :img="p.hero" :tipo="p.tipo" :title="p.title" :to="`/project/${p.slug}`" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from './reutilizable/Card.vue'
import { ref } from 'vue'
import { projects } from '../data/projects'

const proyecto = ref(projects)
</script>