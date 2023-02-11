import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import client from "../client"
import Navbar from "../Comonents/Navbar"
import "../Css/Blog.css"
export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <div>
      <Navbar/>
   
      <h1 >
          Blog page
        </h1>
      <section className="blog">
        

        <div className="blog-item-container" >
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4 >{post.title}</h4>
              <button className="custom-btn btn-3" >
                <Link
                  to={`/blog/${post.slug.current}`}
                  
                >
                  Read Full Article
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
