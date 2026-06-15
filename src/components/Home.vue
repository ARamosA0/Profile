<template>
    <div>
        <Navbar />
        <Inicio />
        <Servicios />
        <Proyectos />
        <Trabajo />
        <Contacto />
        <Footer />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import Navbar from './Navbar.vue'
import Inicio from './Inicio.vue';
import Servicios from './Servicios.vue';
import Trabajo from './Trabajo.vue';
import Proyectos from './Proyectos.vue';
import Contacto from './Contacto.vue';
import Footer from './Footer.vue';
</script>