/** Created by ownwindows on 30-11-21 **/
////////////////////
//// Built-in
import { lazy } from 'react';

////////////////////
//// Interal

////////////////////
//// External


const routes = [
    {
        path: 'home',
        component: lazy(() => import('components/layout/Home/Home.js')),
        exact: true
    },
    {
        path: 'blogs',
        component: lazy(() => import('components/layout/Blog/Blog.js')),
        exact: true
    },
    {
        path: `blogs/:id`,
        component: lazy(() => import('components/layout/BlogPost/BlogPost.js')),
        exact: true
    }
];

export default routes;