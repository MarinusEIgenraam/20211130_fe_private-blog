/** Created by ownwindows on 30-11-21 **/
////////////////////
//// Built-in
import {Route, Redirect} from "react-router-dom";

////////////////////
//// Interal

////////////////////
//// External


export default function PrivateRoutes({children, isAuthenticated, ...rest}) {

    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    isAuthenticated
                        ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { from: location }
                                }}
                            />
                        ))
            }
        />
    );
}