import axios from "axios"

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