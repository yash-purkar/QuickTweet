export const dataInitialState = {
  posts: [],
  users: []
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

    case "POST_OPERATIONS": return {
      ...state, posts: payload
    }

    default: return state;
  }
}