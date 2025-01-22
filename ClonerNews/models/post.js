import { ITEMS_TYPE } from "../constants.js";

class IPost {
  constructor(id, title, time, authour, url, score) {
    this.id = id;
    this.title = title;
    this.time = new Date(time);
    this.authour = authour;
    this.url = url;
    this.score = score;
  }
}

class JobPost extends IPost {
  constructor(id, title, time, authour, url, score) {
    super(id, title, time, authour, url, score);
    this.type = ITEMS_TYPE.JOB;
  }
}

class StoryPost extends IPost {
  constructor(id, title, time, authour, url, score, comments = []) {
    super(id, title, time, authour, url, score);
    this.comments = comments;
    this.type = ITEMS_TYPE.STORY;
  }
}

class PollPost extends IPost {
  constructor(
    id,
    title,
    time,
    authour,
    url,
    comments,
    score,
    text,
    pollOpt = []
  ) {
    super(id, title, time, authour, url, score);
    this.text = text;
    this.comments = comments;
    this.pollOpt = pollOpt;
    this.type = ITEMS_TYPE.POLL;
  }
}

class CommentPost {
  constructor(id, text, time, authour, isSub, comments = []) {
    this.id = id;
    this.text = text;
    this.isSub = isSub;
    this.time = new Date(time * 1000);
    this.authour = authour;
    this.comments = comments;
  }
}

export { JobPost, StoryPost, PollPost, IPost, CommentPost };
