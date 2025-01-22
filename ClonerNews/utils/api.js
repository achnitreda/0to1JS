import { ITEMS_TYPE } from "../constants.js";

export async function getData(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const responseData = await response.json();
  return responseData;
}

export function isType(elType, ...types) {
  for (let type of types) {
    if (type === elType) return true;
  }
  return false;
}

export function isPost(item) {
  return isType(item.type, ITEMS_TYPE.POLL, ITEMS_TYPE.JOB, ITEMS_TYPE.STORY);
}
