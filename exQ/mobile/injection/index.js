import Head from "./components/head.js";

let loadCount = 0;
// loading
const load = () => {
  const img = document.getElementById("loadingImage");
  let opacity = 0;
  const interval = 50; // Change interval time in milliseconds
  const increment = 0.05; // Change the opacity increment value

  const fadeIn = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(fadeIn);
    } else {
      opacity += increment;
      img.style.opacity = opacity;
    }
  }, interval);
};

const removeInterval = () => {
  document.getElementById("loaderPage").style.display = "none";
};

const loaderInterver = setInterval(() => {
  loadCount = loadCount + 1;
  load();
  if (loadCount == 4) {
    clearInterval(loaderInterver);
    removeInterval();
  }
}, 2000);

// Create an instance of Head with a custom title
const head = new Head({ title: "My Custom Title" });
