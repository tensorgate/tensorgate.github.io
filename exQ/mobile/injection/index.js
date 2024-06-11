import kookie from "./components/cookieSetterGetter.js";
import RouteNoLink from "./components/route.js";

// Function to clear the loader cookie
function clearLoaderCookie() {
  new kookie("delete", { key: "loaderCookie" });
}
clearLoaderCookie();

class Loader {
  constructor() {
    this.loadCount = 0;
    this.loadInterval = 2000; // Interval time for loading in milliseconds
    this.fadeInterval = 50; // Interval time for fading in milliseconds
    this.fadeIncrement = 0.05; // Opacity increment value
  }

  load() {
    const img = document.getElementById("loadingImage");
    let opacity = 0;

    const fadeIn = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(fadeIn);
      } else {
        opacity += this.fadeIncrement;
        img.style.opacity = opacity;
      }
    }, this.fadeInterval);
  }

  removeLoader() {
    document.getElementById("loaderPage").style.display = "none";
  }

  startLoading() {
    this.loaderInterval = setInterval(() => {
      this.loadCount += 1;
      this.load();
      if (this.loadCount === 3) {
         // Load welcome screens
         let routeCount = 0;
         const routeInterval = setInterval(() => {
           new RouteNoLink(routeCount);
           routeCount += 1;
           if (routeCount === 4) {
             clearInterval(routeInterval);
           }
         }, 2000);
      }
      if (this.loadCount === 4) {
        clearInterval(this.loaderInterval);
        this.removeLoader();
       
      }
    }, this.loadInterval);
  }
}

// Run loader logic based on cookie
// const loaderCookie = new kookie("check", { key: "loaderCookie" });
// if (loaderCookie) {
//   console.log(new kookie("get", { key: "loaderCookie" }));
// } else {
  const loader = new Loader();
  loader.startLoading();
  new kookie("set", { key: "loaderCookie", value: "loaded" });
// }
