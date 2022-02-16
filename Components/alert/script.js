var ele = document.querySelectorAll(".closebtn");

ele.forEach(item=> item.addEventListener("click", function (e) {
  if (e.target.className) {
    this.parentElement.style.display = "none";
  }
}));
