export const selectPostAndComments = (state) => {
  return state.postsPage.loading === true
    ? null
    : { post: state.postsPage.post, comments: state.postsPage.comments };
};
