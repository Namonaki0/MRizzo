import routerOutlet from "../utils/routerOutlet.js";
import home from "./home.js";
import videos from "./videos.js";
import MerchPage from "./merch.js";

export default function Views(path) {
  switch (path) {
    case "/":
      routerOutlet.innerHTML = `<div>${home}</div>`;
      break;
    case "/videos":
      routerOutlet.innerHTML = `<div>${videos}</div>`;
      break;
    case "/merch":
      routerOutlet.innerHTML = `<div>${MerchPage()}</div>`;
      break;
    default:
      routerOutlet.innerHTML = `<div>${home}</div>`;
      break;
  }
}
