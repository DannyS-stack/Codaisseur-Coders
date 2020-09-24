const initialState = {
  loading: true,
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "posts_fetched":
      return { loading: false, posts: [...state.posts, ...action.payload] };

    default:
      return state;
  }
};
