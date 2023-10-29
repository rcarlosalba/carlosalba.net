import { reactive, ref, computed, onMounted } from 'vue';
import { defineStore } from 'pinia';
import { useFirebaseAuth } from 'vuefire';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const auth = useFirebaseAuth();
  const alertLog = reactive({
    mensaje: '',
    tipo: '',
  });
  const authUser = ref(null);
  const router = useRouter();
  const errorCodes = {
    'auth/user-not-found': 'Usuario no Encontrado',
    'auth/wrong-password': 'Contraseña incorrecta',
  };

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        authUser.value = user;
      }
    });
  });

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        authUser.value = user;
        router.push({ name: 'dashboard' });
      })
      .catch((error) => {
        alertLog.mensaje = errorCodes[error.code];
        alertLog.tipo = 'error';
        setTimeout(() => {
          Object.assign(alertLog, {
            mensaje: '',
            tipo: '',
          });
        }, 3000);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        authUser.value = null;
        router.push({ name: 'home' });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hasError = computed(() => {
    return alertLog.tipo === 'error';
  });

  const isAuth = computed(() => {
    return authUser.value;
  });

  return {
    login,
    logout,
    alertLog,
    hasError,
    isAuth,
  };
});
