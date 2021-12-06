/** Created by ownwindows on 30-11-21 **/
////////////////////
//// Built-in
import {useHistory, useParams} from "react-router-dom";
import {useEffect} from "react";

////////////////////
//// Interal
import './BlogPost.css'

import posts from '../../../data/posts.json'


////////////////////
//// External

export default function BlogPost() {
    const {id} = useParams();
    const getPost = posts.find(x => x.id === id)
    console.log("getposts:"+getPost)


    return (
        <>
            <h1>{getPost.title}</h1>
            <p>{getPost.content}</p>
            <footer>{getPost.date}</footer>
        </>
    );
};