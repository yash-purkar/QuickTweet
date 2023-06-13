export const postInitialState = {
  showPostModel: false,
  showCommentModel: false,
}

export const postReducer = (state, action) => {
  switch (action.type) {

    case "SHOW_COMMENT_MODEL": return {
      ...state, showCommentModel: true
    }

    default: return state
  }
}