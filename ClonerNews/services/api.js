import { CommentPost } from "../models/post.js";
import { getData, isPost } from "../utils/api.js";
import { ItemFactory } from "../utils/itemFactory.js";

const URLS = {
  maxItem() {
    return `https://hacker-news.firebaseio.com/v0/maxitem.json`;
  },
  getItem(id) {
    return `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
  },
};

function validPost(item) {
  return item?.title != undefined;
}

async function getById(id) {
  const url = URLS.getItem(id);
  const response = await getData(url);
  return response;
}

async function getMaxItem() {
  const url = URLS.maxItem();
  const data = getData(url);
  return data;
}

async function getItemsFrom(startItem, numberOfItems) {
  const data = [];
  let count = 0;
  while (count < numberOfItems) {
    const item = await getById(startItem--);

    if (isPost(item) && validPost(item)) {
      const newItem = ItemFactory(item);
      count++;
      data.push(newItem);
    }
  }
  return data;
}

async function getFullPost(id) {
  const item = await getById(id);
  let post = ItemFactory(item);
  const comments = await getPostComments(item.kids, false);
  post.comments = comments;
  return post;
}

async function getPostComments(kids = [], isSub) {
  const comments = [];
  for (let comment of kids) {
    const kid = await getById(comment);
    if (kid?.dead == true) {
      continue;
    }
    const { id, text, by, time, kids } = kid;
    const newComment = new CommentPost(id, text, time, by, isSub);
    if (kids) {
      newComment.comments.push(...(await getPostComments(kids, true)));
    }
    comments.push(newComment);
  }
  return comments;
}

export { getById, getMaxItem, getItemsFrom, getPostComments, getFullPost };
