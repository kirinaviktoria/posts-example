import React from 'react'
import './style.css'

export const Post = ({ post, deletePost, selectPost, showDetailPost }) => {
  return (
    <div key={post.id} className="posts-item">
      <span onClick={() => selectPost(post)}>
        {post.title}
      </span>
      <button onClick={() => deletePost(post.id)}>Delete</button>
      <button onClick={() => showDetailPost(post.id)}>Details</button>
    </div>
  )
}