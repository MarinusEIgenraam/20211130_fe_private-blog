/** Created by ownwindows on 30-11-21 **/
////////////////////
//// Built-in
import { Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';

////////////////////
//// Interal
import routes from 'routes/Routes.js'; // Route list
import Loader from 'components/shared/Loader/Loader.js';

////////////////////
//// External


export default function ProtectedRoutes() {

    return (
        <Switch>
            <Suspense
                fallback={<Loader />}
            >
                {routes.map(({ component: Component, path, exact }) => (
                    <Route
                        path={`/${path}`}
                        key={path}
                        exact={exact}
                    >
                        <Component />
                    </Route>
                ))}
            </Suspense>
        </Switch>
    )
};