import { IPost } from "../models/post.js";
import { h } from "../utils/dom.js";
import { getUrl } from "../utils/helper.js";

class PostItem {
  /**
   *
   * @param {IPost} post
   */
  constructor(post) {
    this.post = post;
  }

  render() {
    let link = this.#aUrl();
    let aTitle = this.#aTitle();

    let postInfo = this.#postInfo();
    return h("article", { className: "post-item" }, aTitle, link, postInfo);
  }

  #aTitle() {
    return h(
      "a",
      {
        href: `/post/${this.post.id}`,
        className: "post-item-title",
      },
      this.post.title
    );
  }

  #aUrl() {
    if (this.post?.url) {
      return h(
        "a",
        { className: "post-item-link", href: this.post.url, target: "_blank" },
        getUrl(this.post.url)
      );
    }
  }

  #postInfo() {
    return h(
      "div",
      { className: "post-item-info" },
      this.#spanEl(`${this.post.score} SCORE`),
      this.#spanEl(`BY ${this.post.authour}`),
      this.post?.comments
        ? this.#spanEl(`${this.post.comments.length} COMMENETS`)
        : this.#spanEl(`0 COMMENETS`)
    );
  }

  #spanEl(text) {
    return h("span", {}, text);
  }
}

export { PostItem };
