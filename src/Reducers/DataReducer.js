export const dataInitialState = {
  posts: [],
  users: [],
  bookmarksIDs: []
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
      ...state, bookmarksIDs: payload
    }
    case "POST_OPERATIONS": return {
      ...state, posts: payload
    }

    // It will add following in my account
    case "ADD_FOLLOWING": return {
      ...state, users: state.users.map(user => user.username === payload.user.username ? { ...user, following: payload.user.following } : user),
    }

    // It will add follower in user account to whom I'm following
    case "ADD_FOLLOWER": return {
      ...state, users: state.users.map(user => user.username === payload.followUser.username ? { ...user, followers: payload.followUser.followers } : user)
    }

    // It will remove following in my account
    case "REMOVE_FOLLOWING": return {
      ...state, users: state.users.map(el => el.username === payload.user.username ?
        { ...el, following: payload.user.following } : el
      )
    }

    case "REMOVE_FOLLOWER": return {
      ...state, users: state.users.map(el => el.username === payload.unfollowedUser.username ? {
        ...el, followers: payload.unfollowedUser.followers
      } : el)
    }

    default: return state;
  }
}