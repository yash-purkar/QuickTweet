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
      ...state, users: state.users.map(user => user.username === payload.user.username ? { ...user, following: [...user.following, payload.followUser] } : user),
    }

    // It will add follower in user account to whom I'm following
    case "ADD_FOLLOWER": return {
      ...state, users: state.users.map(user => user.username === payload.followUser.username ? { ...user, followers: [...user.followers, payload.user] } : user)
    }
    default: return state;
  }
}