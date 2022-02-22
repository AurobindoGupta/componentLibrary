const hamMenubtn = document.querySelector(".ham");
const hamMenu = document.querySelector(".ham-nav");
const hamMenubtn_icon = document.querySelector(".ham-nav-icon");

hamMenubtn.addEventListener("click", menuOpen);
function menuOpen() {
  console.log(hamMenu.style.display);
  hamMenu.classList.toggle("open-ham");
}

hamMenubtn_leftNav.addEventListener("click", function (e) {
  hamMenu_leftNav.classList.toggle("open-ham");
});

