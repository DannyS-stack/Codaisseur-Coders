import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPostAndComments } from "../store/PostsPage/postsSelectors";

import { fetchPost } from "../store/PostsPage/postsActions";

export default function PostsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postAndComment = useSelector(selectPostAndComments);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);
  console.log(postAndComment);

  return (
    <div>
      <p>
        {postAndComment ? (
          <p>DONE LOADING :)</p>
        ) : (
          <p>ONE MOMENT PLEASE...LOADING</p>
        )}
      </p>
    </div>
  );
}
