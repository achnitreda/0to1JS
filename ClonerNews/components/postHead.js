import { StoryPost } from "../models/post.js";
import { h } from "../utils/dom.js";
import { getUrl } from "../utils/helper.js";

export class PostHead {
  /**
   *
   * @param {StoryPost} post
   */
  constructor(post) {
    this.post = post;
  }

  render() {
    return h(
      "article",
      { className: "post-item" },
      this.#title(),
      this.#link()
    );
  }
  #title() {
    return h("div", { className: "post-item-title" }, this.post.title);
  }
  #link() {
    if (!this.post?.url) return null;
    return h(
      "a",
      { className: "post-item-link", href: this.post.url, target: "_blank" },
      getUrl(this.post.url)
    );
  }
}

/**
 * 
 * <article class="post-item">
          <a href="/about" class="post-item-title">
            Show HN: I made a Journaling app to be
          </a>
          <a class="post-item-link" href="http://www.x.com">www.x.com</a>
        </article>
 */
