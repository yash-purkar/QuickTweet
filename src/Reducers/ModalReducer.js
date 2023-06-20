export const modalInitialState = {
  showPostModal: false,
  showCommentModal: false,
  commentPostId: null,
  showProfileEditModal: false
}

export const modalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_POST_MODAL": return {
      ...state, showPostModal: true
    }

    case "HIDE_POST_MODAL": return {
      ...state, showPostModal: false
    }

    case "SHOW_COMMENT_MODAL": return {
      ...state, showCommentModal: true,
      commentPostId: action?.payload?.commentPostId
    }

    case "HIDE_COMMENT_MODAL": return {
      ...state, showCommentModal: false,
      commentPostId: null
    }

    case "SHOW_PROFILE_EDIT_MODAL": return {
      ...state, showProfileEditModal: true
    }

    case "HIDE_PROFILE_EDIT_MODAL": return {
      ...state, showProfileEditModal: false
    }


    default: return state
  }
}