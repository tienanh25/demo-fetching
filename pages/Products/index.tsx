import {InferGetStaticPropsType} from 'next'
import { type } from 'os'

type Product = {
    id: number,
    name:String,
    address: String,
}
export const getStaticProps = async()=>{
    const resapi = await fetch("http://localhost:3000/api");
    const posts:Product[] = await resapi.json()
    return {
        props: {
            posts,
        },
      }
}
function Product({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    const data: Product[] = posts;
    return (
        <ul>
        {posts.map((post) => (
        <li>
            <h3>{post.id}</h3>
            <p>{post.name}</p>
            <p>{post.address}</p>
        </li>
         ))}
        </ul>
    )
}
export default Product




