import {InferGetStaticPropsType} from 'next'

type Product = {
    id: number,
    name:String,
    email: String,
    address: String,
    color: String
}
export const getStaticProps = async()=>{
    require('dotenv').config()
    const resapi = await fetch(`${process.env.API_url}`);
    const posts:Product[] = await resapi.json()
    return {
        props: {
            posts,
        },
        revalidate: 10,
      }
}
function Product({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    const data: Product[] = posts;
    return (
        <ul>
        {posts.map((post) => (
        <li style={{
            listStyle: "none",
        }}>
            <h3>{post.id}</h3>
            <p>{post.name}</p>
            <p>{post.email}</p>
            <p>{post.address}</p>
            <p>{post.color}</p>
        </li>
         ))}
        </ul>
    )
}
export default Product




