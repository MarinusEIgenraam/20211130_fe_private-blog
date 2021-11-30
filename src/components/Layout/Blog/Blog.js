/** Created by ownwindows on 30-11-21 **/
////////////////////
//// Built-in

////////////////////
//// Interal
import './Blog.css'
import posts from '../../../data/posts.json'

////////////////////
//// External

export default function Blog() {
    return (
        <>
            <p>You are blog</p>
            <ul>

                {posts.map((post) => {
                    return (
                        <li>
                            <h2>
                                <a href={`/blogs/${post.id}`}>
                                    {post.title}
                                </a>

                            </h2>
                            <p>{post.content}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}