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

    default: return state;
  }
}