/** Created by ownwindows on 06-12-21 **/
////////////////////
//// Built-in

////////////////////
//// Interal
import './Navbar.scss'
import {NavLink} from "react-router-dom";

////////////////////
//// External

export default function Navbar({handleLogin, isAuthenticated}) {

    return(
        <nav>
            <ul>
                <li><NavLink activeClassName="active-link" exact to='/'>Home</NavLink></li>


                {isAuthenticated && <li><NavLink activeClassName="active-link" exact to='/blogs'>Blogs</NavLink></li>}
                {!isAuthenticated && <li><NavLink activeClassName="active-link" exact to='/login'>Login</NavLink></li>}
                {isAuthenticated && <li><button onClick={handleLogin} href="/">Logout</button></li>}
            </ul>
        </nav>
    )
}