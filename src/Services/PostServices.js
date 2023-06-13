import axios from "axios"

export const createPostHandler = async (postData, socialToken, dataDispatch) => {
  try {
    const { status, data: { posts } } = await axios.post(`/api/posts`, {
      postData
    }
      ,
      {
        headers: {
          authorization: socialToken
        }
      }
    )
    if (status === 200 || status === 201) {
      dataDispatch({ type: "POST_OPERATIONS", payload: posts })
    }
  } catch (error) {
    console.log(error)
  }
}

export const likePostHandler = async (postId, socialToken, dataDispatch) => {
  try {
    const { status, data: { posts } } = await axios.post(`/api/posts/like/${postId}`,
      {},
      {
        headers: {
          authorization: socialToken
        }
      })

    if (status === 200 || status === 201) {
      dataDispatch({ type: "POST_OPERATIONS", payload: posts })
    }
    console.log(posts)
  } catch (error) {
    console.log(error)
  }
}


export const dislikePostHandler = async (postId, socialToken, dataDispatch) => {
  try {
    const { status, data: { posts } } = await axios.post(`/api/posts/dislike/${postId}`,
      {},
      {
        headers: {
          authorization: socialToken
        }
      }
    )

    if (status === 200 || status === 201) {
      dataDispatch({ type: "POST_OPERATIONS", payload: posts })
    }

  } catch (error) {
    console.log(error)
  }
}


export const addCommentHandler = (posts, username, comment, dataDispatch) => {
  const updatedPosts = posts?.map(el => el.username === username ? { ...el, comments: [...el.comments, comment] } : el);
  // console.log(updatedPosts, "posts",username,"ff")
  console.log(comment.username, "user")
  dataDispatch({ type: "POST_OPERATIONS", payload: updatedPosts })
}

export const bookmarkPostHandler = async (postId, socialToken, dataDispatch) => {
  try {
    const { status, data: { bookmarks } } = await axios.post(`/api/users/bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: socialToken
        }
      }
    )
    console.log(bookmarks, "new")
    if (status === 200 || status === 201) {
      dataDispatch({ type: "BOOKMARK_OPERATIONS", payload: bookmarks })
    }


  } catch (error) {
    console.log(error)
  }
}

export const removeBookmarkPostHandler = async (postId, socialToken, dataDispatch) => {
  try {
    const { status, data: { bookmarks } } = await axios.post(`/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: socialToken
        }
      }
    )
    console.log(bookmarks)
    if (status === 200 || status === 201) {
      dataDispatch({ type: "BOOKMARK_OPERATIONS", payload: bookmarks })
    }

  } catch (error) {
    console.log(error)
  }
}