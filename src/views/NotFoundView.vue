<script setup></script>

<template>
  <div
    class="bg-white shadow-md rounded-md p-4 max-w-5xl mx-auto grid items-center md:grid-cols-2 md:gap-4"
  >
    <div class="max-w-xs mx-auto overflow-hidden md:max-w-lg">
      <img
        src="../assets/notfound.jpg"
        alt="404"
        class="rounded-md object-cover"
      />
    </div>
    <div>
      <h3 class="text-xl font-semibold text-ca-darkblue">¡Es toda una pena!</h3>
      <p class="text-gray-500">Pero, no he encontrado la página.</p>
      <RouterLink
        class="text-ca-darkblue font-semibold"
        :to="{ name: 'blog' }"
        >¿Quieres pasar al Blog?</RouterLink
      >
    </div>
  </div>
</template>
