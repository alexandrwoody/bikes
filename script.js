const burger = document?.querySelector('[data-burger]');
const menu = document?.querySelector('[data-menu]');
const body = document.body;
const menuClose = document.querySelector('[data-close]');
burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');

  menu?.classList.add('open');
});
menuClose?.addEventListener('click', () => {


  menu?.classList.remove('open');
})

// Закрыть меню при клике вне его
document.querySelector('[data-menu]').addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.querySelector('[data-burger]').addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector('[data-menu]').classList.remove("open")
});
var tab = document.querySelector('[data-tab]');
tab.addEventListener("mouseover", function () {
  this.classList.add("active");

});
tab.addEventListener("mouseout", function () {
  this.classList.remove("active");

});
var tab2 = document.querySelector('[data-tab2]');
tab2.addEventListener("mouseover", function () {
  this.classList.add("active2");

});
tab2.addEventListener("mouseout", function () {
  this.classList.remove("active2");

});
var tab3 = document.querySelector('[data-tab3]');
tab3.addEventListener("mouseover", function () {
  this.classList.add("active3");

});
tab3.addEventListener("mouseout", function () {
  this.classList.remove("active3");

});
const slider = document.getElementById("slider");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".header-content");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
  const div = document.createElement("div");
  div.className = "pagination-circle";
  bottom.appendChild(div);
  paginationCircles.push(div);
}

function addPagination() {
  slides.forEach(createPaginationCircle);
  paginationCircles[0].classList.add("active-dot");
  paginationCircles.forEach((circle, index) => {
    circle.addEventListener("click", () => changeSlide(index));
  });
}

function addActiveClass() {
  paginationCircles[currentSlideIndex].classList.add("active-dot");
}

function removeActiveClass() {
  paginationCircles[currentSlideIndex].classList.remove("active-dot");
}

function showSlide() {
  slides[currentSlideIndex].classList.add("block");
}

function hideSlide() {
  slides[currentSlideIndex].classList.remove("block");
}

function changeSlide(slideIndex) {
  hideSlide();
  removeActiveClass();
  currentSlideIndex = slideIndex;
  addActiveClass();
  showSlide();
}

function nextSlide() {
  let newSlideIndex = currentSlideIndex + 1;
  if (newSlideIndex > slides.length - 1) {
    newSlideIndex = 0;
  }
  changeSlide(newSlideIndex);
}

function previousSlide() {
  let newSlideIndex = currentSlideIndex - 1;
  if (newSlideIndex < 0) {
    newSlideIndex = slides.length - 1;
  }
  changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

// // Открыть модальное окно
// const popup = document.getElementById("open-modal-link").addEventListener("click", function () {
//   document.getElementById("my-modal").classList.add("open-modal")
// })

// // Закрыть модальное окно
// document.getElementById("close-my-modal-btn").addEventListener("click", function () {
//   document.getElementById("my-modal").classList.remove("open-modal")
// })

// // Закрыть модальное окно при нажатии на Esc
// window.addEventListener('keydown', (e) => {
//   if (e.key === "Escape") {
//     document.getElementById("my-modal").classList.remove("open-modal")
//   }
// });

// // Закрыть модальное окно при клике вне его
// document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
//   event._isClickWithInModal = true;
// });
// document.getElementById("my-modal").addEventListener('click', event => {
//   if (event._isClickWithInModal) return;
//   event.currentTarget.classList.remove('open');
// });