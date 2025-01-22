export function getUrl(str) {
  const regex = /https?:\/\/[^\s]+\.[a-z]+/;
  const match = str.match(regex);
  return match ? match[0] : null;
}

export function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export function throttle(func, wait) {
  let timerId;
  return function (...args) {
    if (!timerId) {
      func(...args);
      timerId = setTimeout(() => {
        timerId = null;
      }, wait);
    }
  };
}

