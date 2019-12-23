import Home from './components/Home.vue';
import Statistics from './components/Statistics.vue';

export const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Statistics',
        path: '/statistics',
        component: Statistics
    },
    {
        path: '*',
        redirect: '/'
    }
];
