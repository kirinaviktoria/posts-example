import React from 'react'

export const Info = ({ post }) => {

  return (
    <div>
        <h1>Detail Post - {post.id}</h1>
        <div><b>Title:</b> {post.title}</div>
        <div style={{maxWidth: '200px'}}><b>Body:</b> {post.body}</div>
        <div><b>UserID:</b> {post.userId}</div>
    </div>
  )
}