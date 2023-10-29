import { createRouter, createWebHistory } from 'vue-router';
import { useFirebaseAuth } from 'vuefire';
import { onAuthStateChanged } from 'firebase/auth';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue'),
    },
    {
      path: '/portfolio/:id',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/CoursesView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/blog/:id',
      name: 'post',
      component: () => import('../views/PostView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/manage/AdminView.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/manage/AdminLayoutView.vue'),
        },
        {
          path: 'newblog',
          name: 'new-blog',
          component: () => import('../views/manage/blog/NewBlogView.vue'),
        },
        {
          path: 'editblog/:id',
          name: 'edit-blog',
          component: () => import('../views/manage/blog/EditBlogView.vue'),
        },
        {
          path: 'newproject',
          name: 'new-project',
          component: () =>
            import('../views/manage/projects/NewProjectView.vue'),
        },
        {
          path: 'editproject/:id',
          name: 'edit-project',
          component: () =>
            import('../views/manage/projects/EditProjectView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((url) => url.meta.requiresAuth);
  if (requiresAuth) {
    try {
      await authenticateUser();
      next();
    } catch (error) {
      console.log(error);
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

function authenticateUser() {
  const auth = useFirebaseAuth();
  return new Promise((resolve, reject) => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      unsubcribe();
      if (user) {
        resolve();
      } else {
        reject();
      }
    });
  });
}

export default router;
