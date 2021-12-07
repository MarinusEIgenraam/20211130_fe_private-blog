/** Created by ownwindows on 06-12-21 **/
////////////////////
//// Build
import {lazy, Suspense, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    NavLink, useHistory,
} from 'react-router-dom';

////////////////////
//// Internal
import './App.css';
import ProtectedRoutes from 'routes/ProtectedRoutes.js'
import PrivateRoutes from 'routes/PrivateRoutes.js'
import PublicRoutes from 'routes/PublicRoutes.js'
import Loader from 'components/shared/Loader/Loader.js'
import BlogPost from "./components/layout/BlogPost/BlogPost";
import Navbar from "components/shared/navigation/Navabar/Navbar";

const Home = lazy(() => import ('components/layout/Home/Home.js'))
const Login = lazy(() => import ('components/layout/Login/Login.js'));
const NoComponentFound = lazy(() => import('components/shared/NoComponentFound/NoComponentFound.js'))

////////////////////
//// External

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    const handleLogin = () => {
        toggleIsAuthenticated(!isAuthenticated);
        // console.log(isAuthenticated);

    };


    return (
        <Router>
            <Navbar isAuthenticated={isAuthenticated} handleLogin={handleLogin}/>
            <Suspense fallback={<Loader/>}>
                <Switch>
                    <PublicRoutes
                        exact path="/"
                        isAuthenticated={isAuthenticated}
                    >
                        <Home/>
                    </PublicRoutes>
                    <PublicRoutes
                        exact path="/login"
                        isAuthenticated={isAuthenticated}
                    >
                        <Login handleLogin={handleLogin}/>
                    </PublicRoutes>
                    <PrivateRoutes
                        path="/"
                        isAuthenticated={isAuthenticated}
                    >
                        <ProtectedRoutes/>
                    </PrivateRoutes>
                    <Route path="*">
                        <NoComponentFound/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
