import React, { useEffect, useState } from "react";
import './style.css' 

export const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  })

  return (
    <div className="posts">
      {
        posts.map((post) => <div key={post.id}>{post.title}</div>)
      }
    </div>
  )
}