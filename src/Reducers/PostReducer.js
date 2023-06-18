export const postInitialState = {
  showPostModel: false,
  showCommentModel: false,
  commentPostId: null
}

export const postReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_POST_MODEL": return {
      ...state, showPostModel: true
    }

    case "HIDE_POST_MODEL": return {
      ...state, showPostModel: false
    }

    case "SHOW_COMMENT_MODEL": return {
      ...state, showCommentModel: true,
      commentPostId: action?.payload?.commentPostId
    }

    case "HIDE_COMMENT_MODEL": return {
      ...state, showCommentModel: false,
      commentPostId: null
    }
    default: return state
  }
}