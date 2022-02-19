let ele = document.querySelector(".openModal");
let modal = document.querySelector(".modal-container");

ele.addEventListener("click", function (e) {
  if (modal.style.display == "block") {
    modal.style.display = "none";
    console.log("if");
  }
  else{
    modal.style.display = "block"
    console.log("else")
  }
});
document.addEventListener("click", function (e) {
  if (e.target !== modal && e.target !== ele) {
    modal.style.display = "none";
    console.log("to");
  }
});
