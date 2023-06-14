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
      dataDispatch({ type: "ADD_FOLLOWING", payload: { user: data.user, followUser: data.followUser } });
      dataDispatch({ type: "ADD_FOLLOWER", payload: { user: data.user, followUser: data.followUser } });
    }
  } catch (error) {
    console.log(error)
  }
}