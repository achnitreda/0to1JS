import { CommentPost } from "../models/post.js";
import { h } from "../utils/dom.js";
import { formatDate } from "../utils/helper.js";

export class CommentItem {
  /**
   *
   * @param {CommentPost} comment
   */
  constructor(comment) {
    this.comment = comment;
  }
  render() {
    let className = "comment-item";
    if (this.comment.isSub) className += " sub-comment";
    const subComment = [];

    this.comment.comments.forEach((sub) => {
      const subItem = new CommentItem(sub);
      subComment.push(subItem.render());
    });

    return h(
      "div",
      { className },
      this.#infoDiv(),
      this.#contentDiv(),
      ...subComment
    );
  }
  #infoDiv() {
    return h(
      "div",
      { className: "comment-item-info" },
      `${this.comment.authour} - ${formatDate(this.comment.time)}`
    );
  }
  #contentDiv() {
    const x = document.getElementByClassName('comment-content')
    x.innerHtml = this.comment.text
    return h("div", { className: "comment-content" }, x);
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
  <div class="comment-item sub-comment">
              <div class="comment-item-info">hboutale - 02/19/2000</div>
              <div class="comment-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                facere at nulla illum quisquam veniam, suscipit, eius esse quas
                placeat illo!
              </div>
            </div>
 */
