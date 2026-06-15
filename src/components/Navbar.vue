<template>
    <nav class="flex items-center justify-between px-8 py-4">
    <div>
        <p class="text-xl font-bold">NEXUS</p>
    </div>

    <ul class="flex items-center gap-8">
        <li>
            <a href="#" class="text-text-secondary relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 hover:after:scale-x-100">
                Servicios
            </a>
        </li>
        <li>
            <a href="#" class="text-text-secondary relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 hover:after:scale-x-100">
                Proceso
            </a>
        </li>
        <li>
            <a href="#" class="text-text-secondary relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 hover:after:scale-x-100">
                Proyectos
            </a>
        </li>
        <li>
            <a href="#" class="text-text-secondary relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 hover:after:scale-x-100">
                Trabajo
            </a>
        </li>
        <li>
            <a href="#" class="text-text-secondary relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 hover:after:scale-x-100">
                Contacto
            </a>
        </li>
    </ul>

    <div>
        <button
            class="rounded-lg bg-accent px-7 py-5 font-medium text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_24px_var(--accent-glow)]"
        >
            Iniciar Proyecto
        </button>
    </div>
</nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>