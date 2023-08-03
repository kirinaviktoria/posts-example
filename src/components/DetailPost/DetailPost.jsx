import React, { useEffect, useState } from 'react'


export const DetailPost = ({ postId }) => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => setPost(post));
  }, [postId])

  return (
    <>
      {post && 
      <div>
        <h1>Detail Post - {postId}</h1>
        <div><b>Title:</b> {post.title}</div>
        <div style={{maxWidth: '200px'}}><b>Body:</b> {post.body}</div>
        <div><b>UserID:</b> {post.userId}</div>
      </div>
      }
    </>
  )
}