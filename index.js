let images = [{
  url: "./images/slider_01.jpg",
}, {
  url: "./images/slider_02.jpg",
}, {
  url: "./images/slider_03.jpg",
}];


function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".dots");
  let sliderDots = document.querySelector(".slider__dots");

  initImages();
  initArrows();
  initDots();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left__arrow")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        // sliderDots.querySelector(".active").classList.remove("active");
        // this.classList.add("active");
      })
    })
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
  }

}

document.addEventListener("DOMContentLoaded", initSlider);

// document.addEventListener("DOMContentLoaded", () => {
//   initSlider();
// });