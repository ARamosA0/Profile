<template>
    <div class="bg-bg-surface py-20">
        <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div class="text-left mb-5">
                <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-text-primary">Hablemos de tu <span class="text-accent">próximo proyecto</span></h2>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div class="flex flex-col gap-4">
                    <div>
                        <h3 class="text-xl font-bold text-text-primary">¿Tienes una idea en mente?</h3>
                        <p class="text-text-secondary mt-2">Estamos listos para escuchar tus retos y convertirlos en soluciones digitales de alto impacto. Completa el formulario y nuestro equipo te contactará en menos de 24 horas.</p>
                    </div>

                    <div class="mt-4 space-y-2">
                        <div class="flex items-center gap-3">
                            <span class="text-accent">📧</span>
                            <span class="text-text-secondary">aldoramosaro@email.com</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-accent">📞</span>
                            <span class="text-text-secondary">+51991356969</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-accent">📍</span>
                            <span class="text-text-secondary">Arequipa, Peru</span>
                        </div>
                    </div>
                </div>

                <div class="bg-bg-surface p-6 sm:p-8 rounded-xl border border-border">
                    <form class="flex flex-col gap-6" @submit.prevent="submitForm" novalidate>
                        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 w-full">
                            <div class="flex flex-col gap-2">
                                <label for="name" class="text-text-secondary">Nombre</label>
                                <input v-model="form.name" type="text" id="name" class="w-full border border-border rounded-md p-2 bg-bg-surface text-text-primary" required />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label for="email" class="text-text-secondary">Correo Electrónico</label>
                                <input v-model="form.email" type="email" id="email" class="w-full border border-border rounded-md p-2 bg-bg-surface text-text-primary" required />
                            </div>
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="service" class="text-text-secondary">Tipo de Servicio</label>
                            <select v-model="form.service" id="service" class="w-full p-3 border rounded-lg">
                                <option value="" disabled>Selecciona un servicio</option>
                                <option value="Diseno Web UI/UX">Diseño Web UI/UX</option>
                                <option value="Desarrollo FrontEnd">Desarrollo FrontEnd</option>
                                <option value="Desarrollo Backend">Desarrollo Backend</option>
                                <option value="SEO/Rendimiento">SEO/Rendimiento</option>
                                <option value="Otro/No estoy seguro">Otro / No estoy seguro</option>
                            </select>
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="message" class="text-text-secondary">Mensaje</label>
                            <textarea v-model="form.message" id="message" rows="4" class="border border-border rounded-md p-2 bg-bg-surface text-text-primary"></textarea>
                        </div>

                        <div class="pt-2">
                            <button type="submit" class="bg-accent text-white py-3 px-4 rounded-md hover:bg-accent-dark transition-colors w-full sm:w-auto">Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
    name: '',
    email: '',
    service: '',
    message: ''
})

const sheetsUrl = "https://script.google.com/macros/s/AKfycbytokErV-We8DtqqAovlJxKaXjYAdLpHWfr-BFg_vhj7b96q5Nq126N3rA4oTUsuCI/exec"

const submitForm = async () => {
    try {
        const formData = new FormData()

        formData.append('name', form.value.name)
        formData.append('email', form.value.email)
        formData.append('service', form.value.service)
        formData.append('message', form.value.message)
        formData.append('date', new Date().toISOString())

        await fetch(sheetsUrl, {
            method: 'POST',
            body: formData
        })

        // on success, reset form and notify user
        form.value = { name: '', email: '', service: '', message: '' }
        alert('Mensaje enviado. Gracias — nos pondremos en contacto pronto.')
    } catch (error) {
        console.error('Error:', error)
        alert('Error al enviar el mensaje')
    }
}

</script>    