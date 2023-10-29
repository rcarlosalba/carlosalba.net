<script setup>
import { RouterLink } from 'vue-router';
import Menu from './Menu.vue';

const toggleMenu = () => {
  const menu = document.querySelector('.menu-container');
  const menuIcon = document.querySelector('[name="menu"]');
  const closeIcon = document.querySelector('[name="close"]');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  menu.classList.toggle('top-16');
  menu.classList.toggle('opacity-100');
  menu.classList.toggle('z-10');
};
</script>

<template>
  <div
    class="flex justify-between p-2 items-center md:sticky md:top-0 bg-white w-full"
  >
    <header
      class="flex justify-between p-2 items-center z-50 md:sticky md:top-0 bg-white w-full"
    >
      <RouterLink :to="{ name: 'home' }">
        <img
          src="../assets/logo.png"
          alt="carlosalba.net"
          class="max-w-[50px] w-[50px]"
        />
      </RouterLink>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="36"
          height="36"
          viewBox="0 0 30 30"
          class="fill-current text-ca-darkblue cursor-pointer md:hidden"
          name="menu"
          @click="toggleMenu()"
        >
          <path
            d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="36"
          height="36"
          viewBox="0 0 30 30"
          class="fill-current text-ca-darkblue cursor-pointer hidden md:hidden"
          name="close"
          @click="toggleMenu()"
        >
          <path
            d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"
          ></path>
        </svg>
      </span>
    </header>
    <nav
      class="menu-container absolute bg-white w-full h-96 left-0 opacity-0 top-0 transition-all ease-in-out duration-500 flex items-center justify-center md:w-auto md:z-auto md:static md:opacity-100 md:h-20 md:left-auto md:pr-2"
      @click="toggleMenu()"
    >
      <Menu />
    </nav>
  </div>
</template>
