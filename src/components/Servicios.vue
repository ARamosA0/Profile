<template>
    <div class="px-50 my-50">
        <section class="text-left flex flex-col gap-5">
            <span class="text-text-rpimary font-bold text-5xl">Nuestros Servicios</span>
            <p class="text-lg text-text-secondary">Combinamos diseño estratégico con tecnología de vanguardia para entregar soluciones que no solo se ven bien, sino que funcionan perfectamente.</p>
        </section>
        <section class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-15">
            <article
                v-for="serv in servicios"
                :key="serv.title"
                class="group rounded-xl border border-border bg-surface p-6
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-accent
                    hover:shadow-[0_12px_24px_var(--accent-glow)]"
            >
                <div
                    class="mb-5 flex h-14 w-14 items-center justify-center rounded-lg
                        bg-accent/10 text-2xl text-accent"
                >
                    {{ serv.icon }}
                </div>

                <h3 class="mb-3 text-xl font-semibold text-text-primary">
                    {{ serv.title }}
                </h3>

                <p class="leading-relaxed text-text-secondary">
                    {{ serv.description }}
                </p>
            </article>
        </section>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'          

const servicios = ref([
    {
        icon: 'icon-web',
        title: "Diseño Web UI/UX",
        description: "Interfaces intuitivas y visualmente impactantes centradas en la experiencia del usuario y la conversión."
    },
    {
        icon: 'icon-web',
        title: "Desarrollo FrontEnd",
        description: "Código limpio, rápido y escalable utilizando las últimas tecnologías como React, Next.js y Vue."
    },
    {
        icon: 'icon-web',
        title: "Desarrollo BackEnd",
        description: "Arquitecturas robustas, APIs RESTful y bases de datos optimizadas para soportar el crecimiento de tu negocio."
    },
    {
        icon: 'icon-web',
        title: "SEO & Rendimiento",
        description: "Optimización técnica para motores de búsqueda y tiempos de carga ultrarrápidos que mejoran tu visibilidad."
    }

])
</script>