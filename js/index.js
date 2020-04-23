//Changing background images
// Setup
let i = 0;
const images = [
  "url(./img/main/modern-architecture.jpg)",
  "url(./img/main/stained-glass-high-rise-building-1106476.jpg)"
];

const images2 = [
  "url(./img/main/gray-high-rise-building-under-blue-and-white-sky-3317535.jpg)",
  "url(./img/main/concrete-building-1759478.jpg)"
];

//function
function changeImage() {
  const el = document.getElementById("navbar-container");
  const el2 = document.getElementById("section-two");
  el.style.backgroundImage = images[i];
  el2.style.backgroundImage = images2[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImage()", 3000);
}

window.onload = changeImage;
