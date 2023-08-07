import React, { useEffect, useState } from 'react'
import { Info } from './components/Info/Info';
import { Comments } from './components/Comments/Comments';


export const DetailPost = ({ postId }) => {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => setPost(post));

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((comments) => setComments(comments));
  }, [postId])

  return (
    <>
      {post && <Info key={post.id} post={post}/>}
      {comments && <Comments comments={comments}/>}
    </>
  )
}