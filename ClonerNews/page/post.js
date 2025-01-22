import { CommentList } from "../components/commentList.js";
import { Loader } from "../components/loading.js";
import { PostHead } from "../components/postHead.js";
import { getFullPost } from "../services/api.js";

export async function PostPage(parent, { id }) {
  parent.innerHTML = "";
  parent.append(Loader());
  const post = await getFullPost(id);
  const postHead = new PostHead(post);
  parent.innerHTML = "";
  parent.append(postHead.render());
  let comments = new CommentList(post);
  return comments.render();
}
