import React, { useEffect, useState } from "react";
import { ManagePost } from "../ManagePost/ManagePost";
import { Post } from "./components/Post/Post";
import { DetailPost } from "../DetailPost/DetailPost";
import './style.css' 
export const Posts = () => {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [postDetailView, setPostDetailView] = useState(null)

  const addNewPost = (post) => {
    setPosts([...posts, post])
  }

  const updatedPost = (post) => {
    const editedPosts = posts.map((oldPost) => {
      if (oldPost.id === post.id) {
        return post
      }
      return oldPost
    })

    setPosts(editedPosts)
  }

  const selectPost = (post) => {
    setSelectedPost(post)
    setPostDetailView(null)
  }

  const showDetailPost = (postId) => {
    setSelectedPost(null)
    setPostDetailView(postId)
  }

  const deletePost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    }).then(() => {
      // console.log(`Post ${postId} deleted`)
      setPosts(posts.filter((item) => item.id !== postId))
    });
  }

  // console.log(selectedPost)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [])

  return (
    <div>
      <div className="posts">
        {
          posts.map((post) => 
            <Post 
              key={post.id} 
              post={post} 
              deletePost={deletePost}
              selectPost={selectPost}
              showDetailPost={showDetailPost}
            />
          )
        }
      </div>

      {
        !postDetailView 
        && 
        <ManagePost 
          addNewPost={addNewPost} 
          selectedPost={selectedPost}
          updatedPost={updatedPost}
        />
      } 

      {postDetailView && <DetailPost postId={postDetailView}/>}
    </div>
  )
}