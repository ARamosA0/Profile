<template>
    <div class="px-50 my-50">
        <div class="my-20 flex flex-col gap-5 text-left">
            <span class="text-text-rpimary font-bold text-5xl">Proyectos Destacados</span>
            <p class="text-text-secondary">Una seleccion de nuestro tabajo reciente, donde la estrategia y el diseno se encuentran con la tecnologia.</p>
        </div>
        <div class="flex flex-wrap gap-8">
            <div
                v-for="p in proyecto"
                :key="p.title"
            >
                <Card :img="p.img" :tipo="p.tipo" :title="p.title" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Card from './reutilizable/Card.vue'
import { ref } from 'vue'

const proyecto = ref([
    {
        img: 'https://picsum.photos/800/600',
        tipo: 'Sitio Web',
        title: 'E-commerce de Moda',
    },
    {
        img: 'https://picsum.photos/800/600',
        tipo: 'Sitio Web',
        title: 'E-commerce de Moda',
    },
    {
        img: 'https://picsum.photos/800/600',
        tipo: 'Sitio Web',
        title: 'E-commerce de Moda',
    },
    {
        img: 'https://picsum.photos/800/600',
        tipo: 'Sitio Web',
        title: 'E-commerce de Moda',
    },
    {
        img: 'https://picsum.photos/800/600',
        tipo: 'Sitio Web',
        title: 'E-commerce de Moda',
    }

])
</script>   