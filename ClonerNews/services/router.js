class Router {
  paths = [];
  routeFn = null;
  constructor() {
    window.addEventListener("DOMContentLoaded", this.loadHandler.bind(this));
    document.body.addEventListener("click", this.clickHandler.bind(this));
    window.addEventListener("popstate", this.handlePopState.bind(this));
  }

  clickHandler(e) {
    const targetEl = e.target.closest("a");
    const target = targetEl?.getAttribute("target");
    if (target == "_blank") {
      return;
    }
    if (this.routeFn) this.routeFn();
    e.preventDefault();
    window.history.pushState({}, "", e.target.pathname);
    this.handleRoute(e.target.pathname);
  }

  loadHandler() {
    this.handleRoute("/");
  }

  handlePopState(e) {
    // e.preventDefault();
    this.handleRoute(window.location.pathname);
  }

  addRoute(path, parent, callback) {
    const pattern = path.replace("///g, '\\/'").replace(/{\w+}/g, "([^/]+)");
    const paramNames = (path.match(/{\w+}/g) || []).map((param) =>
      param.replace(/[{}]/g, "")
    );
    this.paths.push({
      callback,
      parent,
      pattern: new RegExp(`^${pattern}$`),
      paramNames,
    });
  }

  async handleRoute(pathname) {
    const route = this.paths.find((path) => path.pattern.test(pathname));
    if (!route) return;
    const matches = pathname.match(route.pattern);
    const params = route.paramNames.reduce((params, name, index) => {
      params[name] = matches[index + 1];
      return params;
    }, {});

    const { parent, callback } = route;
    parent.innerHTML = "";
    if (callback.constructor.name == "AsyncFunction") {
      const result = await callback(parent, params);
      if (result && typeof result == "function") {
        this.routeFn = result;
      } else if (result) {
        parent.append(result);
      }
    } else {
      const result = callback(parent, params);
      if (result) {
        parent.append(result);
      }
    }
  }
}

export { Router };
