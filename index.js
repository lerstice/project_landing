let images = [{
  url: "./images/slider_01.jpg",
  link: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don<br />LCD admiral",
  area: "81 m<sup>2</sup>",
  time: "3.5 months",
  cost: "Upon request",

}, {
  url: "./images/slider_02.jpg",
  link: "Sochi Thieves",
  city: "Sochi Thieves",
  area: "105 m<sup>2</sup>",
  time: "4 months",
  cost: "Upon request",
}, {
  url: "./images/slider_03.jpg",
  link: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don Patriotic",
  area: "93 m<sup>2</sup>",
  time: "3 months",
  cost: "Upon request",
}];


function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".dots");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderLinks = document.querySelector(".projects-menu")
  let sliderCity = document.querySelector(".city__item")

  initImages();
  initArrows();
  initDots();
  changeLinks();
  changeCity();

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
      })
    })
  }

  function changeLinks() {
    images.forEach((image, index) => {
      let link = `<li class="projects-menu__item"><a class="projects-menu__link n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].link}</a></li>`;
      sliderLinks.innerHTML += link;
    })

    sliderLinks.querySelectorAll(".projects-menu__link").forEach(link => {
      link.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (link.classList.contains("active")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  // function changeCity() {
  //   images.forEach((image, index) => {
  //     let city = `<span class="projects__item__text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].city}</span>`;
  //     sliderCity.innerHTML = city;
  //   })

  //   sliderCity.querySelectorAll(".projects__item__text").forEach(city => {
  //     city.addEventListener("click", function() {
  //       let curNumber = +sliderImages.querySelector(".active").dataset.index;
  //       let nextNumber;
  //       if (city.classList.contains("active")) {
  //         nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
  //       } else {
  //         nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
  //       }
  //       moveSlider(nextNumber);
  //     });
  //   });
  // }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    sliderLinks.querySelector(".active").classList.remove("active");
    sliderLinks.querySelector(".n" + num).classList.add("active");

    sliderCity.querySelector(".active").classList.remove("active");
    sliderCity.querySelector(".n" + num).classList.add("active");
  }

}

document.addEventListener("DOMContentLoaded", initSlider);

// document.addEventListener("DOMContentLoaded", () => {
//   initSlider();
// });