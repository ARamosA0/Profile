<template>
    <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 my-50">
        <section class="text-left flex flex-col gap-3">
            <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary">Nuestros Servicios</h2>
            <p class="text-base md:text-lg text-text-secondary max-w-3xl">Combinamos diseño estratégico con tecnología de vanguardia para entregar soluciones que no solo se ven bien, sino que funcionan perfectamente.</p>
        </section>

        <section class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            <article
                v-for="serv in servicios"
                :key="serv.title"
                class="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_12px_24px_var(--accent-glow)]"
            >
                  <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-xl text-accent">
                    <component :is="serv.icon" :size="24" />
                  </div>

                  <h3 class="mb-2 text-lg sm:text-xl font-semibold text-text-primary">{{ serv.title }}</h3>

                  <p class="leading-relaxed text-text-secondary text-sm sm:text-base">{{ serv.description }}</p>
            </article>
        </section>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'          

import {
    Monitor,
    Code2,
    Server,
    Search
} from 'lucide-vue-next'

const servicios = ref([
    {
        icon: Monitor,
        title: "Diseño Web UI/UX",
        description: "Interfaces intuitivas y visualmente impactantes centradas en la experiencia del usuario y la conversión."
    },
    {
        icon: Code2,
        title: "Desarrollo FrontEnd",
        description: "Código limpio, rápido y escalable utilizando las últimas tecnologías como React, Next.js y Vue."
    },
    {
        icon: Server,
        title: "Desarrollo BackEnd",
        description: "Arquitecturas robustas, APIs RESTful y bases de datos optimizadas para soportar el crecimiento de tu negocio."
    },
    {
        icon: Search,
        title: "SEO & Rendimiento",
        description: "Optimización técnica para motores de búsqueda y tiempos de carga ultrarrápidos que mejoran tu visibilidad."
    }
])
</script>