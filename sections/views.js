import routerOutlet from "../utils/routerOutlet.js";
import home from "./home.js";
import videos from "./videos.js";
import merch from "./merch.js";

export default function Views(path) {
  // const isHomeRoute = path === "/";
  // const isVideosRoute = path === "/videos";
  // const isMerchRoute = path === "/merch";

  switch (path) {
    case "/":
      routerOutlet.innerHTML = `<div>${home}</div>`;
      break;
    case "/videos":
      routerOutlet.innerHTML = `<div>${videos}</div>`;
      break;
    case "/merch":
      routerOutlet.innerHTML = `<div>${merch}</div>`;
      break;
    default:
      routerOutlet.innerHTML = `<div>${home}</div>`;
      break;
  }
  // if (isHomeRoute) {
  //   routerOutlet.innerHTML = `<div>${bio}</div>`;
  // }
}
