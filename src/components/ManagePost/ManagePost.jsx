import React from "react";
import './style.css'

export const ManagePost = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }


  return (
    <div>
      <h2>Add/Edit post</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="title" placeholder="Заголовок" />
        <textarea name="body"/>

        <button>Send</button>
      </form>
    </div>
  )
}