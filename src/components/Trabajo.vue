<template>
    <div class="bg-bg-surface py-10">
        <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div class="flex flex-col gap-3">
                <span class="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary">Cómo Trabajamos</span>
                <p class="text-base md:text-lg text-text-secondary max-w-3xl">Un proceso estructurado pero flexible, diseñado para entregar resultados excepcionales en cada fase.</p>
            </div>

            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
                <div v-for="p in parts" :key="p.number" class="flex flex-col items-center text-center p-4">
                    <div class="w-14 h-14 flex items-center justify-center rounded-full border border-accent">
                        <span class="text-accent text-xl font-bold">{{ p.number }}</span>
                    </div>

                    <div class="mt-4">
                        <h3 class="text-text-primary font-semibold mb-2">{{ p.title }}</h3>
                        <p class="text-text-secondary text-sm sm:text-base">{{ p.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const parts = ref([
    {
        number: '01',
        title: 'Planificación',
        description: 'Analizamos tus objetivos, audiencia y competencia para definir una estrategia digital sólida.'
    },
    {
        number: '02',
        title: 'Diseño',
        description: 'Creamos wireframes y prototipos de alta fidelidad para validar la experiencia final antes del código.'
    },
    {
        number: '03',
        title: 'Desarrollo',
        description: 'Construimos tu solución con código limpio, pruebas rigurosas y buenas prácticas.'
    },
    {
        number: '04',
        title: 'Lanzamiento',
        description: 'Desplegamos, optimizamos y proporcionamos soporte continuo para asegurar el éxito a largo plazo.'
    }
])
</script>