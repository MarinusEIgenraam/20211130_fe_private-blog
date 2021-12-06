/** Created by ownwindows on 30-11-21 **/
////////////////////
//// Build
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";

import {useEffect} from "react";

////////////////////
//// Interal
import './Login.css'

import login from 'data/login.json'


////////////////////
//// External

export default function Login({handleLogin, ...rest}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const history = useHistory();
    const onSubmit = data => {

        console.log(data.username);
        console.log(login.username)

        if (data.username == login.username && data.password == login.password) {
            handleLogin();
        } else {
            console.log("try again")
        }
    };



    return (
        <>
            <div className="container">


                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Username
                        <input {...register("username")} type="text"/>
                    </label>
                    <label>
                        Password
                        <input {...register("password")} type="text"/>
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>

        </>
    );
};