// maind slide
let slideInx = 1;

let slidePrevBtn = document.querySelector(".slide-prev-btn");
let slideNextBtn = document.querySelector(".slide-next-btn");
let slideItem = document.querySelectorAll(".slide-item");

let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");

function slideText() {
  if (slideInx === 1) {
    text1.innerHTML = "다양한 크리스피크림 도넛의 세계로 초대합니다.";
    text2.innerHTML =
      "달콤한 도넛과 조화를 이루는 커피와 음료 맛을 느껴보세요.";
    text3.innerHTML = "커피&음료 바로가기";
  } else if (slideInx === 2) {
    text1.innerHTML = "오직 롯데 잇츠에서만 볼 수 있는 혜택!";
    text2.innerHTML = "매월 5일, 15일, 25일! 11월 오! 잇츠데이";
    text3.innerHTML = "자세히 보기";
  } else if (slideInx === 3) {
    text1.innerHTML = "일상의 시작을 크리스피크림 도넛과 함께하세요.";
    text2.innerHTML = "Original Fresh Drip";
    text3.innerHTML = "자세히 보기";
  } else if (slideInx === 4) {
    text1.innerHTML = "KrispyKreme & Minions";
    text2.innerHTML = "미니언즈 숄더백 하프더즌 세트, 숄더백 단품 8,600";
    text3.innerHTML = "자세히 보기";
  }
}

function slidePrev() {
  console.log("prev", slideInx);
  if (slideInx === 1) {
    return;
  } else {
    slideInx = slideInx - 1;
    slideItem.forEach((e) => {
      e.classList.remove("on");
    });
    slideItem.forEach((e) => {
      if (e.classList.contains(`slide-${slideInx}`)) {
        e.classList.add("on");
      }
    });
  }
  slideText();
}

slidePrevBtn.addEventListener("click", slidePrev);

function slideNext() {
  console.log("next", slideInx);
  if (slideInx === 4) {
    return;
  } else {
    slideInx = slideInx + 1;
    slideItem.forEach((e) => {
      e.classList.remove("on");
    });
    slideItem.forEach((e) => {
      if (e.classList.contains(`slide-${slideInx}`)) {
        e.classList.add("on");
      }
    });
  }
  slideText();
}

slideNextBtn.addEventListener("click", slideNext);
