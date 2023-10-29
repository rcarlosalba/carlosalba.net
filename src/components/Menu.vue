<script setup>
import { useAuthStore } from '../stores/auth';

const auth = useAuthStore();
</script>
<template>
  <!-- Admin menu -->
  <div
    v-if="auth.isAuth"
    class="flex space-x-2 flex-wrap text-center space-y-4 md:flex-nowrap md:items-center md:space-y-0"
    id="menu"
  >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'home' }"
      >Inicio</RouterLink
    >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'about' }"
      >Biografía</RouterLink
    >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'portfolio' }"
      >Portafolio</RouterLink
    >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'courses' }"
      >Cursos</RouterLink
    >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'contact' }"
      >Contacto</RouterLink
    >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'blog' }"
      >Blog</RouterLink
    >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'dashboard' }"
      >Admin</RouterLink
    >
    <span class="hidden md:flex self-center"> | </span>
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'login' }"
      @click="auth.logout"
      >Cerrar Sesión</RouterLink
    >
  </div>
  <!-- Public menu -->
  <div
    v-else
    class="flex space-x-2 flex-wrap text-center space-y-4 md:flex-nowrap md:items-center md:space-y-0"
  >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'home' }"
      >Inicio</RouterLink
    >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'about' }"
      >Biografía</RouterLink
    >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'portfolio' }"
      >Portafolio</RouterLink
    >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'courses' }"
      >Cursos</RouterLink
    >
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'contact' }"
      >Contacto</RouterLink
    >
    <span class="hidden md:flex self-center"> | </span>
    <RouterLink
      class="block w-full py-2"
      :to="{ name: 'blog' }"
      >Blog</RouterLink
    >
  </div>
</template>
