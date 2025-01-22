import { h } from "../utils/dom.js";
import { CommentItem } from "./commentItem.js";

export class CommentList {
  /**
   *
   * @param {StoryPost} post
   */
  constructor(post) {
    this.post = post;
  }
  render() {
    const allComment = this.#getComments();
    return h("section", { className: "commnet-section" }, ...allComment);
  }
  #getComments() {
    const commentsList = [];
    this.post.comments.forEach((comment) => {
      commentsList.push(new CommentItem(comment).render());
    });
    return commentsList.length > 0 ? commentsList : ["No Comments"];
  }
}
/**
 * <section id="commnet-section">
 */
