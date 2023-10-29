<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFirestore, useDocument } from 'vuefire';
import { doc, updateDoc } from 'firebase/firestore';
import useImage from '../../../composables/useImage';

const route = useRoute();
const router = useRouter();
const db = useFirestore();
const docRef = doc(db, 'proyectos', route.params.id);
const proyectoToEdit = useDocument(docRef);
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

const formData = reactive({});
onMounted(() => {
  Object.assign(formData, proyectoToEdit.value);
});

const handleSubmit = async (data) => {
  const { imgP, ...proyecto } = data;

  if (isThereImage.value) {
    const data = {
      ...proyecto,
      imagen: isThereImage.value,
    };
    await updateDoc(docRef, data);
  } else {
    const data = {
      ...proyecto,
    };
    await updateDoc(docRef, data);
  }
  router.push({ name: 'admin-projects' });
};
</script>

<template>
  <div class="w-[80%] max-w-5xl mx-auto my-8">
    <h1 class="text-3xl font-bold my-4">Editar Publicación</h1>
    <h2 class="text-2xl font-semibold my-4 text-ca-lightblue">
      Edita la publicación rellenando el Formulario
    </h2>
    <FormKit
      type="form"
      :actions="false"
      incomplete-message=":-( no hemos podido enviar el formulario, revisa todos los campos"
      @submit="handleSubmit"
      :value="formData"
    >
      <FormKit
        type="file"
        label="Imagen de Portada"
        name="imgP"
        accept=".jpg,.jpeg,.png"
        placeholder="Puedes actualizar la imagen de la portada"
        prefix-icon="fileImage"
        help="Un archivo .jpg o .png"
        v-model="formData.imagen"
        @change="uploadImage"
      >
      </FormKit>
      <div class="my-5">
        <p>Imagen Actual:</p>
        <img
          v-if="isThereImage"
          :src="isThereImage"
          alt="Portada Proyecto"
          class="max-w-xs"
        />
        <img
          v-else
          :src="proyectoToEdit?.imagen"
          alt="Portada Proyecto"
          class="max-w-xs"
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
        v-model="formData.project"
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
        v-model="formData.description"
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
        v-model="formData.tecnologias"
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
        v-model="formData.urlpro"
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
        v-model="formData.urlrepo"
      ></FormKit>
      <FormKit
        type="submit"
        prefix-icon="submit"
        >Actualizar Proyecto
      </FormKit>
    </FormKit>
  </div>
</template>
