const display = document.querySelector("#display");
const parent = document.querySelector(".nums");

parent.addEventListener("click", function (e) {
  display.append(e.target.value);
});
