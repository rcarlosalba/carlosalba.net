<script setup>
import { collection, addDoc } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router';
import useImage from '../../../composables/useImage';

const db = useFirestore();
const router = useRouter();
const { uploadImage, isThereImage } = useImage();

const categorias = [
  'Sin Categoría',
  'JavaScript',
  'VueJs',
  'Python',
  'Django',
  'TailwindCSS',
  'Psicología',
  'Parentalidad',
];

const handleSubmit = async (data) => {
  const { imgD, ...post } = data;

  const docRef = await addDoc(collection(db, 'posts'), {
    ...post,
    imagen: isThereImage.value,
  });
  if (docRef.id) {
    router.push({ name: 'admin' });
  }
};
</script>

<template>
  <div class="w-[80%] max-w-5xl mx-auto my-8">
    <h1 class="text-3xl font-bold my-4">Nueva Publicación</h1>
    <h2 class="text-2xl font-semibold my-4 text-ca-lightblue">
      Crea una nueva publicación llenando el Formulario
    </h2>
    <FormKit
      type="form"
      :actions="false"
      incomplete-message=":-( no hemos podido enviar el contenido, revisa cada uno de los campos"
      @submit="handleSubmit"
    >
      <FormKit
        type="file"
        label="Imagen de Portada"
        accept=".jpg,.jpeg,.png"
        name="imgD"
        placeholder="Sube la imagen de la Portada"
        prefix-icon="fileImage"
        help="Un archivo .jpg ó .png"
        validation="required"
        :validation-messages="{
          required: 'La imagen de la Portada es obligatoria',
        }"
        validation-visibility="submit"
        @change="uploadImage"
      >
      </FormKit>
      <div
        v-if="isThereImage"
        class="max-w-xs w-[280]"
        alt="Imagen Destacada"
      >
        <p>Imagen Destacada</p>
        <img
          class="max-w-xs w-[280]"
          :src="isThereImage"
          alt="Imagen Destacada"
        />
      </div>
      <FormKit
        type="text"
        label="Título: "
        name="titulo"
        placeholder="Ingresa el Título de la Publicación"
        prefix-icon="text"
        help="Ingresa el título del post"
        validation="required"
        :validation-messages="{ required: 'El título es obligatorio' }"
        validation-visibility="submit"
      >
      </FormKit>
      <FormKit
        type="textarea"
        label="Introducción: "
        rows="2"
        name="introduccion"
        placeholder="Ingresa la Introducción de la Publicación"
        prefix-icon="text"
        help="Ingresa la Introducción del post"
        validation="required"
        :validation-messages="{ required: 'La Introducción es obligatoria' }"
        validation-visibility="submit"
      >
      </FormKit>
      <FormKit
        type="textarea"
        label="Contenido: "
        name="contenido"
        placeholder="Ingresa el contenido de la Publicación"
        prefix-icon="text"
        help="Ingresa el contenido del post"
        validation="required"
        :validation-messages="{ required: 'El contenido es obligatorio' }"
        validation-visibility="submit"
      >
      </FormKit>
      <FormKit
        type="textarea"
        label="CTA: "
        name="cta"
        placeholder="Ingresa el CTA de la Publicación"
        prefix-icon="text"
        help="Ingresa el CTA del post"
        validation="required"
        :validation-messages="{ required: 'El CTA es obligatorio' }"
        validation-visibility="submit"
      >
      </FormKit>
      <FormKit
        type="date"
        label="Fecha de Publicación: "
        name="publishDate"
        help="Fecha de Publicación"
        validation="required"
      >
      </FormKit>
      <FormKit
        type="select"
        label="Categoría: "
        name="categoria"
        prefix-icon="list"
        placeholder="Selecciona una categoría"
        help="Selecciona una categoría"
        validation="required"
        :validation-messages="{ required: 'La Categoría es obligatoria' }"
        :options="categorias"
      >
      </FormKit>
      <FormKit
        type="submit"
        prefix-icon="submit"
        color="bg-ca-orange"
      >
        Publicar
      </FormKit>
    </FormKit>
  </div>
</template>
