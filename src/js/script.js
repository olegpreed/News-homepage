const sideMenu = document.createElement("nav");
const greyOverlay = document.createElement("div");
greyOverlay.classList.add("grey-overlay");
sideMenu.classList.add("sidebar-menu");
const burgerButton = document.querySelector(".menu-icon");
sideMenu.innerHTML = `<img class="close-button" src="../assets/images/icon-menu-close.svg" alt="">
<ul class="sidebar-menu-list">
  <li><a href="">Home</a></li>
  <li><a href="">New</a></li>
  <li><a href="">Popular</a></li>
  <li><a href="">Trending</a></li>
  <li><a href="">Categories</a></li>
</ul>`;

let i = 0;
burgerButton.onclick = function () {
  burgerButton.after(sideMenu);
  document.body.append(greyOverlay);
  setTimeout(() => {
    sideMenu.classList.toggle("move");
    greyOverlay.classList.toggle("show");
  }, 10);
  if (!i) {
    const closeButton = sideMenu.querySelector(".close-button");
    closeButton.onclick = function () {
      sideMenu.classList.toggle("move");
      greyOverlay.classList.toggle("show");
      setTimeout(() => {
        greyOverlay.remove();
        sideMenu.remove();
      }, 300);
    };
    i = 1;
  }
};
