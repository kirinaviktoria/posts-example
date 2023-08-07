import React from 'react'

export const Comments = ({ comments }) => {

  return (
    <div style={{maxWidth: '400px', overflow: 'scroll', maxHeight: '600px', marginTop: '30px'}}>
      <h2>Comments</h2>
      {
        comments.map((comment) => 
        <div key={comment.id}>
          <div><b>Title:</b> {comment.name}</div>
          <div><b>Text:</b> {comment.body}</div>
          <div><b>Email:</b> {comment.email}</div>
          <br/>
        </div>)
      }
    </div>
  )
}