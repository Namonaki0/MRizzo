import Views from "./sections/views.js";

console.log(Views);

const router = new Navigo(null, { linksSelector: "a" }, "#");

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      { path: "/", page: Views },
      { path: "/videos", page: Views },
      { path: "/merch", page: Views },
    ];

    routes.forEach(({ path, page }) => {
      router
        .on(path, () => {
          page(path);
          console.log(path);
        })
        .resolve();
    });
  }
}
