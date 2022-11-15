let eventSlide = document.querySelector(".event-slide");
let eventPrevBtn = document.querySelector(".event-prev-btn");
let eventNextBtn = document.querySelector(".event-next-btn");

let eventInx = 0;

function eventPrev() {
  if (eventInx === 0) {
    return;
  } else {
    eventInx = eventInx - 1;
    eventSlide.style.justifyContent = "flex-start";
  }
}

eventPrevBtn.addEventListener("click", eventPrev);

function eventNext() {
  if (eventInx === 1) {
    return;
  } else {
    eventInx = eventInx + 1;
    eventSlide.style.justifyContent = "flex-end";
  }
}

eventNextBtn.addEventListener("click", eventNext);
