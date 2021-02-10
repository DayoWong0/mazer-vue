import VueRouter from 'vue-router'
import HelloWorldTest from "@/test/HelloWorldTest";
import defaultLayout from "@/layouts/default";
import index from "@/pages/index";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'HelloWorldTest',
            component: HelloWorldTest,
            path: '/test'
        },
        {
            path: '/',
            component: defaultLayout,
            children: [
                {
                    path: '',
                    component: index
                }
            ]
        },
        {
            path: '/components',
            component: defaultLayout,
            children: [
                {
                    path: 'alert',
                    component: () => import('@/pages/components/alert'),
                },
                {
                    path: 'badge',
                    component: () => import('@/pages/components/badge'),
                },
                {
                    path: 'breadcrumb',
                    component: () => import('@/pages/components/breadcrumb'),
                },
                {
                    path: 'button',
                    component: () => import('@/pages/components/button'),
                },
                {
                    path: 'card',
                    component: () => import('@/pages/components/card'),
                },
                {
                    path: 'carousel',
                    component: () => import('@/pages/components/carousel'),
                },
                {
                    path: 'dropdown',
                    component: () => import('@/pages/components/dropdown'),
                },
                {
                    path: 'list-group',
                    component: () => import('@/pages/components/list-group'),
                },
                {
                    path: 'modal',
                    component: () => import('@/pages/components/modal'),
                },
                {
                    path: 'navs',
                    component: () => import('@/pages/components/navs'),
                },
                {
                    path: 'pagination',
                    component: () => import('@/pages/components/pagination'),
                },
                {
                    path: 'progress',
                    component: () => import('@/pages/components/progress'),
                },
                {
                    path: 'spinner',
                    component: () => import('@/pages/components/spinner'),
                },
                {
                    path: 'tooltip',
                    component: () => import('@/pages/components/tooltip'),
                },

            ]
        },
        {
            path: '/extra-components',
            component: defaultLayout,
            children: [
                {
                    path: 'avatar',
                    component: () => import('@/pages/extra-components/avatar'),
                },
                {
                    path: 'sweetalert',
                    component: () => import('@/pages/extra-components/sweetalert'),
                },
                {
                    path: 'toastify',
                    component: () => import('@/pages/extra-components/toastify'),
                },
                {
                    path: 'rating',
                    component: () => import('@/pages/extra-components/rating'),
                },
                {
                    path: 'divider',
                    component: () => import('@/pages/extra-components/divider'),
                }
            ]
        },
        {
            // this layout need change
            path: '/layouts',
            component: defaultLayout,
            children: [
                {
                    path: 'default',
                    component: () => import('@/pages/layouts/default'),
                },
                {
                    path: '1-column',
                    component: () => import('@/pages/layouts/1-column'),
                },
                {
                    path: 'vertical',
                    component: () => import('@/pages/layouts/vertical'),
                },
            ]}
    ]
});
