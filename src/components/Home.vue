<template>
    <div>
        <Navbar />
        <Inicio id="inicio"/>
        <Servicios id="servicios"/>
        <Proyectos id="proyectos"/>
        <Trabajo id="trabajo"/>
        <Contacto id="contacto"/>
        <Footer />
    </div>
</template>
<script setup lang="ts">

import Navbar from './Navbar.vue'
import Inicio from './Inicio.vue';
import Servicios from './Servicios.vue';
import Trabajo from './Trabajo.vue';
import Proyectos from './Proyectos.vue';
import Contacto from './Contacto.vue';
import Footer from './Footer.vue';
</script>