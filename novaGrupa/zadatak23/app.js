const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const body = document.getElementsByTagName("body");
btnSubmit = document.getElementById("submit");
btnClear = document.getElementById("celar");

btnSubmit.addEventListener("click", () => {
  for (let i = 0; i < parseFloat(input1.value); i++) {
    let pTag = document.createElement("p");
    pTag.innerHTML = `${input2.value}`;
    pTag.setAttribute("id", "p-tag");
    body[0].appendChild(pTag);
    console.log(pTag);
  }
});

btnClear.addEventListener("click", () => {
  for (let i = 0; i < parseFloat(input1.value); i++) {
    const element = document.getElementById("p-tag");
    element.remove();
  }
});
