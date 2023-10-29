<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFirestore, useDocument } from 'vuefire';
import { doc, updateDoc } from 'firebase/firestore';
import useImage from '../../../composables/useImage';

const route = useRoute();
const router = useRouter();
const db = useFirestore();
const docRef = doc(db, 'posts', route.params.id);
const postToEdit = useDocument(docRef);
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

const formData = reactive({});
onMounted(() => {
  Object.assign(formData, postToEdit.value);
});

const handleSubmit = async (data) => {
  const { imgD, ...post } = data;
  if (isThereImage.value) {
    const data = {
      ...post,
      imagen: isThereImage.value,
    };
    await updateDoc(docRef, data);
  } else {
    const data = {
      ...post,
    };
    await updateDoc(docRef, data);
  }
  router.push({ name: 'admin-blog' });
};
</script>

<template>
  <div class="w-[80%] max-w-5xl mx-auto my-8">
    <h1 class="text-3xl font-bold my-4">Editar Publicación</h1>
    <h2 class="text-2xl font-semibold my-4 text-ca-lightblue">
      Edita una publicación del blog llenando el Formulario
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
        placeholder="Puedes actualizar imagen de la Portada"
        prefix-icon="fileImage"
        help="Un archivo .jpg ó .png"
        v-model="formData.imagen"
        @change="uploadImage"
      >
      </FormKit>
      <div class="my-5">
        <p>Imagen Actual:</p>
        <img
          v-if="isThereImage"
          :src="isThereImage"
          class="max-w-xs w-[280]"
          alt="Imagen Destacada"
        />
        <img
          :src="postToEdit?.imagen"
          alt="Imagen Destacada"
          class="max-w-xs w-[280]"
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
        v-model="formData.titulo"
      >
      </FormKit>
      <FormKit
        type="textarea"
        label="Introducción: "
        rows="2"
        name="intro"
        placeholder="Ingresa la Introducción de la Publicación"
        prefix-icon="text"
        help="Ingresa la Introducción del post"
        validation="required"
        :validation-messages="{ required: 'La Introducción es obligatoria' }"
        validation-visibility="submit"
        v-model="formData.intro"
      >
      </FormKit>
      <FormKit
        type="textarea"
        label="Contenido: "
        name="content"
        placeholder="Ingresa el contenido de la Publicación"
        prefix-icon="text"
        help="Ingresa el contenido del post"
        validation="required"
        :validation-messages="{ required: 'El contenido es obligatorio' }"
        validation-visibility="submit"
        v-model="formData.content"
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
        v-model="formData.cta"
      >
      </FormKit>
      <FormKit
        type="date"
        label="Fecha de Publicación: "
        name="publishDate"
        help="Fecha de Publicación"
        v-model="formData.publishDate"
      >
      </FormKit>
      <FormKit
        type="date"
        label="Fecha de Actualización: "
        name="updateDate"
        help="Fecha de Actualización"
        v-model="formData.updateDate"
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
        v-model="formData.categorias"
      >
      </FormKit>
      <FormKit
        type="submit"
        prefix-icon="submit"
      >
        Actualizar Publicación
      </FormKit>
    </FormKit>
  </div>
</template>
