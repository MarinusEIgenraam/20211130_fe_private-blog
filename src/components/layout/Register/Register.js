/** Created by ownwindows on 30-11-21 **/
////////////////////
//// Build
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";

import {useEffect} from "react";

////////////////////
//// Interal
import './Register.scss'

import login from 'data/login.json'


////////////////////
//// External

export default function Register({handleLogin, ...rest}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const history = useHistory();
    const onSubmit = (data) => {
        const {username, password} = data;

        if (username === login.username && password === login.password) {
            // handleLogin();
            // history.push('/private')
        } else {
            console.log("try again")
        }
    };


    return (
        <>
            <div className="container">


                <form onSubmit={handleSubmit}>
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