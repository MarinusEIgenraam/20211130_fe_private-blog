import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import Login from "./components/Layout/Login/Login";
import Home from "./components/Layout/Home/Home";
import Blog from "./components/Layout/Blog/Blog";
import BlogPostPost from "./components/Layout/BlogPost/BlogPost";
import BlogPost from "./components/Layout/BlogPost/BlogPost";
import ClassBlogs from "./components/Layout/ClassBlogs/ClassBlogs";
import Private from "./components/Layout/Private/Private";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    const handleLogin = () => {
        toggleIsAuthenticated(!isAuthenticated);
        console.log(isAuthenticated);
        // location.push("/private");
    };

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink activeClassName="active-link" exact to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName="active-link" exact to='/blogs'>Blogs</NavLink></li>
                    <li><NavLink activeClassName="active-link" exact to='/classblogs'>ClassBlogs</NavLink></li>
                    <li><NavLink activeClassName="active-link" exact to='/login'>Login</NavLink></li>
                    {isAuthenticated && <li><button onClick={handleLogin} href="/">Logout</button></li>}
                </ul>
            </nav>

            <Switch>
                <Route exact path='/blogs'>
                    <Blog/>
                </Route>
                <Route exact path='/classblogs'>
                    <ClassBlogs/>
                </Route>
                <Route exact path='/login'>
                    <Login handleLogin={handleLogin}/>
                </Route>
                <Route exact path='/blogs/:id'>
                    <BlogPost/>
                </Route>
                <Route exact path='/'>
                    <Home/>
                </Route>
                {isAuthenticated && <Route exact path="/private"><Private/></Route>}

            </Switch>
        </BrowserRouter>
    );
}

export default App;
