<template>
    <div class="bg-bg-surface py-20">
        <div class="max-w-7xl mx-auto my-30 px-6 md:px-12 lg:px-20">
            <div class="text-left my-15">
                <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary">Hablemos de tu <span class="text-accent">próximo proyecto</span></h2>
            </div>

            <div class="grid grid-cols-1 gap-16 sm:grid-cols-2">
                <div class="flex flex-col gap-4">
                    <div>
                        <h3 class="text-xl font-bold text-text-primary">¿Tienes una idea en mente?</h3>
                        <p class="text-text-secondary mt-2">Estamos listos para escuchar tus retos y convertirlos en soluciones digitales de alto impacto. Completa el formulario y nuestro equipo te contactará en menos de 24 horas.</p>
                    </div>
                </div>

                <div class="bg-bg-surface p-6 sm:p-8 ">
                    <a
                        href="https://wa.me/51991356969?text=Hola%2C%20quiero%20consultar%20sobre%20un%20proyecto"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contactar por WhatsApp"
                        class="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-accent text-white py-3 px-4 rounded-md hover:bg-accent-dark transition-colors"
                    >

                        <img :src=wp alt="WhatsApp" class="w-5 h-5 brightness-0 invert">
                        <span>Contáctanos por WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import wp from '../assets/154858.png'
</script>    