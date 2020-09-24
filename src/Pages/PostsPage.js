import React from "react";
import { useParams } from "react-router-dom";

export default function PostsPage() {
  const { id } = useParams();

  return (
    <div>
      <p>{id}?</p>
    </div>
  );
}
