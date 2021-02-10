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
        // {
        //     path: '/',
        //     component: User,
        //     children: [
        //         {
        //             // 当 /user/:id/profile 匹配成功，
        //             // UserProfile 会被渲染在 User 的 <router-view> 中
        //             path: 'profile',
        //             component: UserProfile
        //         },
        //         {
        //             // 当 /user/:id/posts 匹配成功
        //             // UserPosts 会被渲染在 User 的 <router-view> 中
        //             path: 'posts',
        //             component: UserPosts
        //         }
        //     ]
        // }
    ]
});
