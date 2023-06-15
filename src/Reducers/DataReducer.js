export const dataInitialState = {
  posts: [],
  users: [],
}

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INITIALIZE_POSTS": return {
      ...state, posts: payload
    }

    case "INITIALIZE_USERS": return {
      ...state, users: payload
    }

    case "BOOKMARK_OPERATIONS": return {

      ...state, users: state.users.map(el => el.username === payload.username ? { ...el, bookmarks: payload.bookmarks } : el)
    }

    case "POST_OPERATIONS": return {
      ...state, posts: payload
    }

    // It will add or remove the user from loggedInUser following.

    case "FOLLOWING_OPERATIONS": return {
      ...state, users: state?.users?.map(el => el.username === payload.user?.username ? { ...el, following: payload?.user?.following } : el)
    }

    // It will add follower in user account to whom I'm following
    case "ADD_FOLLOWER": return {
      ...state, users: state.users.map(user => user.username === payload.followUser.username ? { ...user, followers: payload.followUser.followers } : user)
    }

    case "REMOVE_FOLLOWER": return {
      ...state, users: state.users.map(el => el.username === payload.unfollowedUser.username ? {
        ...el, followers: payload.unfollowedUser.followers
      } : el)
    }

    default: return state;
  }
}