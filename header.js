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

let language = "KOR";

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
  console.log("value = ", value);
  return value;
}
langListItem.forEach((e) =>
  e.addEventListener("click", function () {
    language = getValue(e.value);
    lang.innerHTML = getValue(e.value);
    langBtn.classList.remove("open");
    modalBg.classList.remove("on");
  })
);
modalBg.addEventListener("click", function () {
  langBtn.classList.remove("open");
  modalBg.classList.remove("on");
});

// Mobile Menu
let mobileBtn = document.querySelector(".mobile-menu-btn");
let mobileNav = document.querySelector(".mobile-nav-root");
let mobileNavBg = document.querySelector(".mobile-nav-bg");
let mobileCloseBtn = document.querySelector(".mobile-close-btn");
let mobileSnbBtn = document.querySelectorAll(".mobile-snb-btn");
let mobileSnb = document.querySelectorAll(".mobile-snb");

function mobileNavOpen() {
  mobileNav.classList.add("on");
}
function mobileNavClose() {
  mobileNav.classList.remove("on");
}
function snbOpen(inx) {
  mobileSnb.forEach((snb) => {
    snb.classList.remove("on");
    if (snb.classList.contains(`mobile-snb-${inx}`)) {
      snb.classList.toggle("on");
    }
  });
}
mobileSnbBtn.forEach((btn) => {
  let inx = btn.dataset.inx;
  btn.addEventListener("click", function () {
    snbOpen(inx);
  });
});

mobileBtn.addEventListener("click", mobileNavOpen);
mobileCloseBtn.addEventListener("click", mobileNavClose);
mobileNavBg.addEventListener("click", mobileNavClose);

let mobileLangItem = document.querySelectorAll(".mobile-lang-item");
let mobileLangBtn = document.querySelectorAll(".mobile-lang-btn");
let korBtn = document.querySelector(".KOR");
let engBtn = document.querySelector(".ENG");

mobileLangItem.forEach((e) => {
  e.addEventListener("click", function () {
    if (language === "KOR" && e.classList.contains("KOR")) {
      e.classList.add("on");
      engBtn.classList.remove("on");
    } else if (language === "ENG" && e.classList.contains("ENG")) {
      e.classList.add("on");
      korBtn.classList.remove("on");
    }
  });
});

mobileLangBtn.forEach((e) => {
  e.addEventListener("click", function () {
    language = e.value;
  });
});
