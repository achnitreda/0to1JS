import { MainPage } from "./page/main.js";
import { PostPage } from "./page/post.js";
import { getMaxItem } from "./services/api.js";
import { Router } from "./services/router.js";

let contentEl = document.querySelector("#content");
const notifcation = document.getElementById("notifcation");
let prev;
setInterval(async () => {}, 5000);
async function Notifcation() {
  prev = await getMaxItem();
  setInterval(async () => {
    const last = await getMaxItem();
    notifcation.textContent = last - prev;
  }, 5000);
}

sidenav.addEventListener("click", async (e) => {
  const notif = e.currentTarget.querySelector("#notifcation");
  if (notif) {
    notif.innerHTML = "0";
    prev = await getMaxItem();
  }
});

Notifcation();

const router = new Router();

router.addRoute("/", contentEl, MainPage);
router.addRoute("/post/{id}", contentEl, PostPage);
