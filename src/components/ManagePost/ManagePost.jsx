import React, { useEffect, useState } from "react";
import './style.css'

export const ManagePost = ({ addNewPost, selectedPost, updatedPost }) => {
  const [formValues, setFormValues] = useState({
    userId: 1,
    title: '',
    body: ''
  })

  
  const createPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((post) => addNewPost(post));
  }

  const editPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`, {
      method: 'PUT',
      body: JSON.stringify(formValues),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((post) => updatedPost(post));
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (selectedPost) editPost()
    else createPost()
  }

  const onChangeValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(selectedPost) {
      setFormValues(selectedPost)
    }
    // console.log(selectedPost)
  }, [selectedPost])

  return (
    <div>
      <h2>Add/Edit post</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="title" 
          placeholder="Заголовок" 
          onChange={onChangeValues}
          value={formValues.title}
        />

        <textarea 
          name="body" 
          onChange={onChangeValues}
          value={formValues.body}
        />

        {
          selectedPost ? <button>Edit</button> : <button>Send</button>
        }
        
      </form>
    </div>
  )
}