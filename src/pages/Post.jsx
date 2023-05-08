import { useLoaderData } from "react-router-dom"

const Post = () => { 

    const {post} = useLoaderData()
    return(
        <div>
            <h1> {post.id} - {post.titile}</h1>
            <p>{post.body}</p>
        </div>
    )
 }
 export default Post

 export const loaderPost = async({params})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()
    return {post}
 }