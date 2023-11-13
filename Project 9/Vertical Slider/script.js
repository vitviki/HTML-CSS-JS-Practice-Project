const sliderContainer = document.querySelector(".main-container");
const leftSlide = document.querySelector(".left-slider");
const rightSlide = document.querySelector(".right-slider");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = rightSlide.querySelectorAll("div").length;

let currentSlideNumber = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  switch (direction) {
    case "up":
      currentSlideNumber++;
      if (currentSlideNumber > slidesLength - 1) {
        currentSlideNumber = 0;
      }
      break;
    case "down":
      currentSlideNumber--;
      if (currentSlideNumber < 0) {
        currentSlideNumber = slidesLength - 1;
      }
      break;
  }

  rightSlide.style.transform = `translateY(-${
    currentSlideNumber * sliderHeight
  }px)`;
  leftSlide.style.transform = `translateY(${
    currentSlideNumber * sliderHeight
  }px)`;
};
