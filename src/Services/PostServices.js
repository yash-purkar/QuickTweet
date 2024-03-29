import axios from "axios"
import { remove, success, warning } from "./ToastsServices"

// create new post handler
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
      success("Post Added")
    }
  } catch (error) {
    console.log(error)
  }
}

// like post handler
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

  } catch (error) {
    console.log(error)
  }
}

// dislike post handler
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


// bookmark post handler
export const bookmarkPostHandler = async (postId, socialToken, dataDispatch, socialUser) => {
  try {
    const { status, data: { bookmarks } } = await axios.post(`/api/users/bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: socialToken
        }
      }
    )

    if (status === 200 || status === 201) {
      dataDispatch({ type: "BOOKMARK_OPERATIONS", payload: { bookmarks, username: socialUser.username } })
      success("Added To Bookmark")
    }


  } catch (error) {
    console.log(error)
  }
}

// remove bookmark post handler
export const removeBookmarkPostHandler = async (postId, socialToken, dataDispatch, socialUser) => {
  try {
    const { status, data: { bookmarks } } = await axios.post(`/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: socialToken
        }
      }
    )

    if (status === 200 || status === 201) {
      dataDispatch({
        type: "BOOKMARK_OPERATIONS", payload: {
          bookmarks, username: socialUser.username
        }
      })
      warning("Removed from bookmark")
    }

  } catch (error) {
    console.log(error)
  }
}

// add comment handler
export const addCommentHandler = async (postId, commentData, socialToken, dataDispatch) => {
  try {
    const { status, data: { posts } } = await axios.post(`/api/comments/add/${postId}`,
      {
        commentData
      },
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

// delete comment handler
export const deleteCommentHandler = async (postId, commentId, socialToken, dataDispatch) => {
  try {
    const { status, data: { posts } } = await axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
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

// add post handler
export const editPostHandler = async (postId, postData, socialToken, dataDispatch) => {
  try {
    const { status, data: { posts } } = await axios.post(`/api/posts/edit/${postId}`, {
      postData
    },
      {
        headers: {
          authorization: socialToken
        }
      })
    if (status === 200 || status === 201) {
      dataDispatch({ type: "POST_OPERATIONS", payload: posts })
      success("Post Edited")
    }
  } catch (error) {
    console.log(error)
  }
}

// delete post handler
export const deletePostHandler = async (postId, socialToken, dataDispatch) => {
  try {
    const { status, data: { posts } } = await axios.delete(`/api/posts/${postId}`, {
      headers: {
        authorization: socialToken
      }
    })

    if (status === 200 || status === 201) {
      dataDispatch({ type: "POST_OPERATIONS", payload: posts })
      remove("Post Deleted")
    }

  } catch (error) {
    console.log(error)
  }
}