/** Created by ownwindows on 30-11-21 **/
////////////////////
//// Built-in
import {useHistory} from "react-router-dom";

////////////////////
//// Interal
import './Login.css'

////////////////////
//// External


export default function Login(props) {
    const {handleLogin} = props;
    const history = useHistory();
    const doubleFunction = () => {
        handleLogin();
        history.push('/private')
    };

    return (
        <>
            <div className="container">

                <p>You are login</p>
                <button onClick={doubleFunction}>Login</button>
            </div>
        </>
    )
};