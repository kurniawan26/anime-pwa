// Function for toggle navbar button when page in mobile style

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navLink = document.querySelectorAll(".nav-link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

navLink.forEach((element) => {
  element.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
  });
});

////////////////////////////////////////
// Function FOR SLIDING IMAGE
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider-btn--left");
  const btnRight = document.querySelector(".slider-btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Function for creating on the slider

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers for clicking slide button
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();
