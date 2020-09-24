import axios from "axios";

export function startLoading() {
  console.log("is startloading working?");
  return { type: "toggle_loading" };
}
export function postsFetched(posts) {
  return { type: "posts_fetched", payload: posts };
}

export async function fetchNext5Posts(dispatch, getState) {
  const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

  // const currentState = getState();
  const offSet = getState().feed.posts.length;
  const response = await axios.get(`${API_URL}/posts?offset=${offSet}&limit=5`);
  const morePosts = response.data.rows;
  console.log(morePosts);

  //dispatch action response data to state
  dispatch(postsFetched(morePosts));
}
