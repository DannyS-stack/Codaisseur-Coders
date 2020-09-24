const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "start_loading":
      return { ...state, loading: false };
    case "postsPage_fetched":
      return {
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };

    default:
      return state;
  }
};
