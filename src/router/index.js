import Vue from 'vue'
import VueRouter from 'vue-router'
import Stories from '@/components/stories.vue'
import StoryDetail from '@/components/storyDetail.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "stories",
        component: Stories,
    },
    {
        path: "/stories",
        name: "stories-detail",
        component: StoryDetail,
        props: route => ({ query: route.query.id })
    }
]

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;