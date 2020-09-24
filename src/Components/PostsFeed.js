import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import {
  selectFeedLoading,
  selectFeedPosts,
} from "../store/feed/feedSelectors";
import { postsFetched, fetchNext5Posts } from "../store/feed/feedActions";

export default function PostsFeed() {
  const posts = useSelector(selectFeedPosts);
  const loading = useSelector(selectFeedLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      <div>
        {posts.map((post) => {
          return (
            <div>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
              <p>{post.content}</p>
            </div>
          );
        })}
        {!loading ? (
          <button onClick={() => dispatch(fetchNext5Posts)}>next posts</button>
        ) : (
          <div>loading</div>
        )}
      </div>

      {/* TODO: render the list of posts */}

      {/* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */}
    </div>
  );
}
