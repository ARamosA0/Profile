<template>
    <div class="bg-bg-surface py-10 px-50">
        <div class="flex flex-col gap-5">
            <span class="text-text-primary font-bold text-5xl">Como Trabajamos</span>
            <p class="text-text-secondary">Un proceso estructurado pero flexible, disenado para entregar resultados exepcionales en cada fase.</p>
        </div>
        <div class="flex flex-wrap gap-6 my-10">
            <div
                v-for="p in parts"
                :key="p.number"
                class="flex flex-col items-center text-center flex-1 min-w-[250px]"
            >
                <div
                class="w-14 h-14 flex items-center justify-center rounded-full border border-accent"
                >
                <span class="text-accent text-xl font-bold">
                    {{ p.number }}
                </span>
                </div>

                <div class="mt-4">
                <h3 class="text-text-primary font-semibolad mb-4">
                    {{ p.title }}
                </h3>

                <p class="text-text-secondary mt-2">
                    {{ p.description }}
                </p>
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
        description: 'Analizamos tus objetivos, audiencia y competencia para definir una estrategia digital solida.'
    },
    {
        number: '02',
        title: 'Diseño',
        description: 'Creamos wireframes y prototipos de alta fidelidad para validar la experiencia final antes del codigo.'
    },
    {
        number: '03',
        title: 'Desarrollo',
        description: 'Construims tu solucion con codigo limpio, pruebas rigurosas y buenas practicas.'
    },
    {
        number: '04',
        title: 'Lanzamiento',
        description: 'Desplegamos, optimizamos y proporcionamos soporte continuo para asegurar el exito a largo plazo.'
    }
])
</script>   