import { ITEMS_TYPE } from "../constants.js";
import { PollPost, StoryPost } from "../models/post.js";

function ItemFactory(item) {
  switch (item.type) {
    case ITEMS_TYPE.JOB:
      return newJob(item);
    case ITEMS_TYPE.POLL:
      return newPoll(item);
    case ITEMS_TYPE.STORY:
      return newStory(item);
  }
  throw new Error(`Unexpected Item ${item.type}`);
}

function newJob(item) {
  const { id, title, time, text, by, url, score } = item;
  return new JobPost(id, title, time, text, by, url, score);
}
function newPoll(item) {
  const { id, title, time, by, url, pollOpt, score, kids, text } = item;
  const poll = new PollPost(
    id,
    title,
    time,
    by,
    url,
    kids,
    score,
    text,
    pollOpt
  );
  return poll;
}
//id, title, time, authour, url, score, (comments = []);
function newStory(item) {
  const { id, title, time, by, url, score, kids } = item;
  const story = new StoryPost(id, title, time, by, url, score, kids);
  return story;
}

export { ItemFactory };
