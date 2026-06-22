<template>
    <div class="fixed top-0 left-0 w-full z-50 bg-bg-surface">
        <nav class="max-w-7xl mx-auto flex items-center justify-between px-8">
        <div>
            <a href="/" class="text-3xl font-bold">
                <img src="../assets/logo.png" alt="TIKA Digital" width="150"/>
            </a>
        </div>

        <!-- Desktop links -->
        <ul class="hidden md:flex items-center gap-8">
            <li>
                <a href="#servicios" class="text-text-secondary relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 hover:after:scale-x-100">
                    Servicios
                </a>
            </li>
            <li>
                <a href="#proyectos" class="text-text-secondary relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 hover:after:scale-x-100">
                    Proyectos
                </a>
            </li>
            <li>
                <a href="#trabajo" class="text-text-secondary relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 hover:after:scale-x-100">
                    Trabajo
                </a>
            </li>
            <li>
                <a href="#contacto" class="text-text-secondary relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 hover:after:scale-x-100">
                    Contacto
                </a>
            </li>
        </ul>

        <!-- CTA (desktop) -->
        <div class="hidden md:block">
            <button
                class="rounded-lg bg-accent px-7 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_var(--accent-glow)]"
            >
                Iniciar Proyecto
            </button>
        </div>

        <!-- Mobile toggle -->
        <button
            @click="open = !open"
            class="md:hidden p-2 rounded-md text-text-secondary hover:text-white"
            aria-label="Toggle menu"
        >
            <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </nav>
    </div>
    

    <!-- Mobile menu -->
    <div v-if="open" class="fixed inset-0 z-40 md:hidden bg-bg-surface pt-20 px-6">
        <ul class="flex flex-col gap-4">
            <li>
                <a href="#inicio" class="block text-text-secondary hover:text-white">Inicio</a>
            </li>
            <li>
                <a href="#servicios" class="block text-text-secondary hover:text-white">Servicios</a>
            </li>
            <li>
                <a href="#proyectos" class="block text-text-secondary hover:text-white">Proyectos</a>
            </li>
            <li>
                <a href="#trabajo" class="block text-text-secondary hover:text-white">Trabajo</a>
            </li>
            <li>
                <a href="#contacto" class="block text-text-secondary hover:text-white">Contacto</a>
            </li>
        </ul>

        <div class="mt-4">
            <button class="w-full rounded-lg bg-accent px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_var(--accent-glow)]">
                Iniciar Proyecto
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>