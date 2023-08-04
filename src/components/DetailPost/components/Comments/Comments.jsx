import React from 'react'

export const Comments = ({ comments }) => {

  return (
    <>
      {
        comments.map((comment) => <div>
          <h2>Comments</h2>
          <div>Title: {comment.title}</div>
          <div>Text: {comment.body}</div>
          <div>Email: {comment.email}</div>
        </div>)
      }
    </>
  )
}