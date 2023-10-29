<script setup>
import { collection, addDoc } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router';
import useImage from '../../../composables/useImage';

const db = useFirestore();
const router = useRouter();
const { uploadImage, url, isThereImage } = useImage();

const tecnologias = [
  'HTML',
  'CSS',
  'Responsive Web Design',
  'Sass',
  'TailwindCSS',
  'Bootstrap',
  'JavaScript Vanilla',
  'VueJS3',
  'FormKit',
  'Firebase',
  'Python',
  'FastApi',
  'Django',
];

const handleSubmit = async (data) => {
  const { imgP, ...proyecto } = data;
  const docRef = await addDoc(collection(db, 'proyectos'), {
    ...proyecto,
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
      incomplete-message=":-( no hemos podido enviar el formulario, revisa todos los campos"
      @submit="handleSubmit"
    >
      <FormKit
        type="file"
        label="Imagen de Portada"
        name="imgP"
        accept=".jpg,.jpeg,.png"
        placeholder="Selecciona la imagen de la portada"
        prefix-icon="fileImage"
        help="Un archivo .jpg o .png"
        validation="required"
        :validation-messages="{
          required: 'La imagen de la Portada es obligatoría',
        }"
        validation-visibility="submit"
        @change="uploadImage"
      >
      </FormKit>
      <div
        v-if="isThereImage"
        class="my-5"
      >
        <p>Vista Previa de la portada del proyecto:</p>
        <img
          class="max-w-xs"
          :src="url"
          alt="Portada del Proyecto"
        />
      </div>

      <FormKit
        type="text"
        label="Nombre del Proyecto: "
        name="titulo"
        placeholder="Ingrese el nombre del proyecto"
        prefix-icon="text"
        help="Ingresa el nombre del proyecto"
        validation="required"
        :validation-messages="{
          required: 'El nombre del proyecto es obligatorio',
        }"
        validation-visibility="submit"
      >
      </FormKit>
      <FormKit
        type="textarea"
        label="Descripción del Proyecto: "
        name="description"
        placeholder="Descripción del Proyecto"
        prefix-icon="text"
        help="Ingresa la Descripción del proyecto"
        validation="required"
        :validation-messages="{
          required: 'La descripción es obligatoria',
        }"
        validation-visibility="submit"
      >
      </FormKit>
      <FormKit
        type="checkbox"
        label="Tecnologías"
        name="tecnologias"
        validation="required"
        :options="tecnologias"
        help="Selecciona las tecnologías aplicadas en el Proyecto"
        :validation-messages="{
          required: 'Selecciona dos o más tenologías',
        }"
        validation-visibility="submit"
      >
      </FormKit>
      <FormKit
        type="text"
        label="URL del Proyecto: "
        name="urlpro"
        placeholder="https://www.proyecto.com"
        prefix-icon="url"
        help="Ingresa la URL del proyecto"
        validation="required|url"
        :validation-messages="{
          required: 'La URL no parece ser valida',
        }"
        validation-visibility="submit"
      ></FormKit>
      <FormKit
        type="text"
        label="URL del Repositorio"
        name="urlrepo"
        placeholder="https://www.repositorio.com"
        prefix-icon="url"
        help="Ingresa la URL del Repositorio"
        validation="required|url"
        :validation-messages="{
          required: 'La URL no parece ser valida',
        }"
        validation-visibility="submit"
      ></FormKit>
      <FormKit
        type="submit"
        prefix-icon="submit"
        >Publicar Proyecto
      </FormKit>
    </FormKit>
  </div>
</template>

<style scope></style>
