import React, { useEffect, useState } from "react";
import { ManagePost } from "../ManagePost/ManagePost";
import { Post } from "./components/Post/Post";
import { DetailPost } from "../DetailPost/DetailPost";
import './style.css' 
import { Pagination } from "../Pagination/Pagination";
export const Posts = () => {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [postDetailView, setPostDetailView] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [userId, setUserId] = useState(1)

  const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
  
  const changePage = (page) => {
    setCurrentPage(page)
  }

  const changeUser = (e) => {
    setUserId(e.target.value)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&userId=${userId}`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [currentPage, userId])

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

      <Pagination 
        pagination={pagination} 
        currentPage={currentPage} 
        changePage={changePage}
      />

      <h2>Filter</h2>
      <input type="text" placeholder="insert user id" value={userId} onChange={changeUser}/>
      
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