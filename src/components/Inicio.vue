<template>
    <section class="text-left px-50 my-20">
    <article class="my-5 text-balance">
        <h1 class="text-8xl font-bold">
            Creamos experiencias digitales que
            <span class="text-accent">transforman</span> negocios.
        </h1>

        <p class="mt-6 text-lg text-text-secondary">
            Diseñamos y desarrollamos sitios web de alto rendimiento,
            aplicaciones web complejas y soluciones digitales a medida
            que impulsan el crecimiento de tu marca.
        </p>
    </article>

    <div class="mt-8 flex gap-4">
        <button
            class="rounded-lg bg-accent px-7 py-5 font-medium text-white
                   transition-all duration-300
                   hover:-translate-y-1
                   hover:shadow-[0_12px_24px_var(--accent-glow)]"
        >
            Habla con un experto
        </button>

        <button
            class="rounded-lg border border-border bg-surface px-7 py-5
                   font-medium text-white
                   transition-all duration-300
                   hover:-translate-y-1
                   hover:bg-accent/20
                   hover:border-accent"
        >
            Ver nuestro trabajo
        </button>
    </div>
</section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
</script>   