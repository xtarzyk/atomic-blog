import { useContext } from "react";
import { PostContext } from "../utils/context";

function Results() {
  const { posts } = useContext(PostContext);

  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
