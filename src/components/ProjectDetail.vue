<template>
  <div class="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12">
    <button @click="$router.back()" class="mb-6 text-sm text-text-secondary">← Volver</button>

    <div v-if="project" class="space-y-10">
      <!-- Hero -->
      <section>
        <img :src="project.hero" alt="" class="w-full h-96 object-cover rounded-lg shadow-md" />
      </section>

      <!-- Header -->
      <section class="grid md:grid-cols-3 gap-6 items-start">
        <div class="md:col-span-2">
          <h1 class="text-4xl font-extrabold text-text-primary">{{ project.title }}</h1>
          <p class="text-text-secondary mt-2">{{ project.tipo }}</p>
          <p class="mt-6 text-lg text-text-primary">{{ project.shortDescription }}</p>
        </div>

        <aside class="p-6 bg-surface rounded-lg">
          <p class="text-sm text-text-secondary">Rol</p>
          <p class="font-medium text-text-primary">{{ project.role }}</p>

          <div class="mt-4">
            <p class="text-sm text-text-secondary">Tecnologías</p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span v-for="tech in project.technologies || []" :key="tech" class="px-3 py-1 bg-border rounded-full text-sm">{{ tech }}</span>
            </div>
          </div>

          <div class="mt-6">
            <a v-if="project.external" :href="project.external" target="_blank" class="text-accent">Ver sitio</a>
          </div>
        </aside>
      </section>

      <!-- Long description -->
      <section class="prose max-w-none text-text-primary">
        <h2>Descripción</h2>
        <p>{{ project.longDescription }}</p>
      </section>

      <!-- Gallery -->
      <section>
        <h3 class="text-2xl font-bold text-text-primary mb-4">Imágenes</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img v-for="(img, i) in project.gallery || []" :key="i" :src="img" class="w-full object-cover rounded-lg" />
        </div>
      </section>

    </div>

    <div v-else class="text-text-secondary">Proyecto no encontrado.</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()
const slug = String(route.params.slug || '')

const project = projects.find((p) => p.slug === slug)
</script>
