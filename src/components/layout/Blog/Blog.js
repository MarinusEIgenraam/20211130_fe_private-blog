/** Created by ownwindows on 30-11-21 **/
////////////////////
//// Built-in
import React, {NavLink, useHistory} from "react-router-dom";

////////////////////
//// Interal
import './Blog.css'
import posts from '../../../data/posts.json'

////////////////////
//// External

export default function Blog() {
    const history = useHistory();

    return (
        <>
            <p>You are blog</p>
            <ul>

                {posts.map((post) => {
                    return (
                        <li>
                            <h2><NavLink activeClassName="active-link" exact to={`/blogs/${post.id}`}>{post.title}</NavLink></h2>
                            <p>{post.content}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}