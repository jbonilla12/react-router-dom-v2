import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
    const {posts} = useLoaderData()
    
    return (
        <ul className="list-group">
            {
                posts.length>0 ? (
                    posts.map(post=>(
                        <li 
                            className="list-group-item"
                            key={post.id}>
                                <Link to={`/blog/${post.id}`}>{post.title}</Link>
                            </li>
                    ))
                ):(
                    <li className="list-group-item">No hay blogs</li>
                )
            }
        </ul>
        
    )
}
export default Blog;

export const loaderBlog = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();
    
    return {posts}
}