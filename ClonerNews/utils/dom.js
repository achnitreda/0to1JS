function createElement(type, props = {}, ...children) {
  const element = document.createElement(type);

  for (const [key, value] of Object.entries(props)) {
    if (key === "style" && typeof value === "object") {
      Object.assign(element.style, value);
    } else if (key.startsWith("on") && typeof value === "function") {
      const eventName = key.toLowerCase().substring(2);
      element.addEventListener(eventName, value);
    } else if (key === "className") {
      element.className = value;
    } else if (typeof value === "boolean") {
      if (value) {
        element.setAttribute(key, "");
      }
    } else {
      element.setAttribute(key, value);
    }
  }

  for (const child of children) {
    if (child != null) {
      element.append(
        typeof child === "string" ? document.createTextNode(child) : child
      );
    }
  }

  return element;
}

const h = createElement;

export { h };
