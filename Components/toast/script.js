var ele = document.querySelectorAll(".toast-closeBtn");

ele.forEach(item=> item.addEventListener("click", function (e) {
  if (e.target.className) {
    this.parentElement.style.display = "none";
  }
}));
