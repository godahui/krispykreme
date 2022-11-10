// GNB open
let gnb = document.querySelector(".gnb");
let bg = document.querySelector("#bg");
let snb = document.querySelectorAll(".snb");

function showBg() {
  bg.classList.add("on");
  bg.classList.remove("off");
  snb.forEach((e) => e.classList.add("on"));
  snb.forEach((e) => e.classList.remove("off"));
}
function closeBg() {
  bg.classList.remove("on");
  bg.classList.add("off");
  snb.forEach((e) => e.classList.remove("on"));
  snb.forEach((e) => e.classList.add("off"));
}

gnb.addEventListener("mouseover", showBg);
gnb.addEventListener("mouseleave", closeBg);

bg.addEventListener("mouseover", showBg);
bg.addEventListener("mouseleave", closeBg);

// language list
let langBtn = document.querySelector(".lang-btn");
let lang = document.querySelector(".lang");
let langList = document.querySelector(".lang-list");
let langListItem = document.querySelectorAll(".lang-list-item");
let modalBg = document.querySelector(".modal-bg");

langBtn.addEventListener("click", function () {
  if (langBtn.classList.contains("open")) {
    langBtn.classList.remove("open");
    modalBg.classList.remove("on");
    return;
  }
  langBtn.classList.add("open");
  modalBg.classList.add("on");
});
function getValue(value) {
  switch (value) {
    case 0:
      value = "KOR";
      break;
    case 1:
      value = "ENG";
      break;
    default:
  }
  return value;
}
langListItem.forEach((e) =>
  e.addEventListener("click", function () {
    lang.innerHTML = getValue(e.value);
    langBtn.classList.remove("open");
    modalBg.classList.remove("on");
  })
);
modalBg.addEventListener("click", function () {
  langBtn.classList.remove("open");
  modalBg.classList.remove("on");
});
