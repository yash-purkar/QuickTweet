import axios from "axios"

export const followUserHandler = async (followUserId, socialToken, dataDispatch) => {
  try {
    const { status, data } = await axios.post(`/api/users/follow/${followUserId}`,
      {},
      {
        headers: {
          authorization: socialToken
        }
      }
    )

    console.log(data)
    if (status === 200 || status === 201) {
      // dataDispatch({ type: "ADD_FOLLOWING", payload: { user: data.user } });
      dataDispatch({ type: "ADD_FOLLOWER", payload: { followUser: data.followUser } });
      localStorage.setItem("socialUser", JSON.stringify(data.user))
    }
  } catch (error) {
    console.log(error)
  }
}


export const unfollowUserHandler = async (followUserId, socialToken, dataDispatch) => {
  try {
    const { status, data } = await axios.post(`/api/users/unfollow/${followUserId}`,
      {},
      {
        headers: {
          authorization: socialToken
        }
      }
    )

    if (status === 200 || status === 201) {
      // dataDispatch({
      //   type: "REMOVE_FOLLOWING", payload: {
      //     user: data.user
      //   }
      // })
      dataDispatch({
        type: "REMOVE_FOLLOWER", payload: {
          unfollowedUser: data.followUser
        }
      })
      localStorage.setItem("socialUser", JSON.stringify(data.user))
    }
  } catch (error) {
    console.log(error)
  }
}
