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