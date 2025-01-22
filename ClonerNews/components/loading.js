import { h } from "../utils/dom.js";

function Loader() {
  return h(
    "div",
    { className: "loading" },
    h("div", { className: "spinner" }),
    h("p", {}, "Loading...")
  );
}

export { Loader };
/**
 * 
 * <div class="loading">
        <div class="spinner"></div>
        <p>Loading...</p>
    </div>
 */
