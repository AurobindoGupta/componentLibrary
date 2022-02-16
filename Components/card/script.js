var ele = document.querySelectorAll(".icon-close");

ele.forEach(item=> item.addEventListener("click", function (e) {
  if (e.target.className) {
    this.parentElement.parentElement.style.display = "none";
  }
}));
