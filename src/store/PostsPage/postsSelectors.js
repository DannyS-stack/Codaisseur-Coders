function selectPostAndComments(state) {
  return state.postPage.loading === true
    ? null
    : { post: state.postPage.post, comments: state.postPage.comments };
}
