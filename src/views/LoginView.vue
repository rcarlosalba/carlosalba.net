<script setup>
import { useAuthStore } from '../stores/auth';
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const auth = useAuthStore();

const handleSubmit = (data) => {
  auth.login(data.email, data.password);
  router.push({ name: 'admin' });
};
</script>

<template>
  <div class="max-w-lg mx-auto mb-8 h-[63vh]">
    <div class="grid gap-4 mb-4 text-center text-ca-darkblue">
      <h1 class="text-2xl font-bold md:text-3xl md:pt-4">Iniciar Sesión</h1>
      <h2 class="text-xl font-semibold md:text-2xl">
        Inicia sesión con tus credenciales
      </h2>
    </div>
    <FormKit
      type="form"
      :actions="false"
      incomplete-message=":-( no hemos podido enviar el formulario, revisa todos los campos"
      @submit="handleSubmit"
    >
      <FormKit
        type="text"
        label="Email: "
        name="email"
        placeholder="Ingresa tu Email"
        prefix-icon="email"
        help="Ingresa tu Email"
        validation="required|email"
        :validation-messages="{
          required: 'El Email es obligatorio',
          email: 'El Email no es válido',
        }"
        validation-visibility="live"
      >
      </FormKit>
      <FormKit
        type="password"
        label="Contraseña: "
        name="password"
        placeholder="Ingresa tu Contraseña"
        prefix-icon="lock"
        help="Ingresa tu Contraseña"
        validation="required|?length:8"
        :validation-messages="{
          required: 'La Contraseña es obligatoria',
          length: 'La contraseña debe tener por lo menos 8 caracteres',
        }"
        validation-visibility="live"
      >
      </FormKit>
      <FormKit
        type="submit"
        label="Iniciar Sesión"
        color="primary"
      >
      </FormKit>
    </FormKit>
  </div>
</template>
