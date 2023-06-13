export const postInitialState = {
  showPostModel: false,
  showCommentModel: false,
  commentPostUser: null
}

export const postReducer = (state, action) => {
  switch (action.type) {

    case "SHOW_COMMENT_MODEL": return {
      ...state, showCommentModel: true,
      commentPostUser: action?.payload?.commentPostUser
    }

    case "HIDE_COMMENT_MODEL": return {
      ...state, showCommentModel: false,
      commentPostUser: null
    }
    default: return state
  }
}