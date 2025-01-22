import { Loader } from "../components/loading.js";
import { PostItem } from "../components/postItem.js";
import { getItemsFrom, getMaxItem } from "../services/api.js";

async function MainPage(parent) {
  const loader = Loader();
  let done = false;
  parent.innerHTML = "";
  let isLoading = true;
  parent.append(loader);
  const maxItem = await getMaxItem();
  let data = await getItemsFrom(maxItem, 1);
  loader.remove();
  isLoading = false;
  const handleScroll = async () => {
    console.log(isLoading);

    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200 &&
      !isLoading
    ) {
      isLoading = true;
      parent.append(loader);

      try {
        let start = data.at(-1).id - 1;
        data = await getItemsFrom(start, 10);
        if (!done) {
          data.forEach((post) => {
            const postComp = new PostItem(post);
            parent.append(postComp.render());
          });
        }
        loader.remove();
      } catch (error) {
        console.error("Error loading more items:", error);
      } finally {
        loader.remove();
        isLoading = false;
      }
    }
  };
  window.addEventListener("scroll", handleScroll);

  data.forEach((post) => {
    const postComp = new PostItem(post);
    parent.append(postComp.render());
  });
  return () => {
    window.removeEventListener("scroll", handleScroll);
    done = true;
    loader.remove();
  };
}

export { MainPage };
