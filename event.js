//====  onclick
//====
function renderDiv(e) {
  const d = document.querySelector(".yy");
  d.textContent = "ccc ddd";
}

//==== addEventListener
//====
function renderDiv() {
  const d = document.querySelector(".yy");
  d.textContent = "cccc fff fff";
}
document.querySelector("#btn").addEventListener("click", renderDiv);
