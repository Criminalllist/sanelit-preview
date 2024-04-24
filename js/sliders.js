//Слайдеры

//Главный слайдер
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  rewind: true,

  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//Популярные категории
const cardSlider = new Swiper(".popular-slider", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 16,
  rewind: true,
  grid: {
    rows: 2,
    fill: "row",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".popular-slider__pagination",
  },

  breakpoints: {
    768: {
      grid: {
        rows: 0,
      },
      spaceBetween: 30,
    },
  },
});

const showcase = new Swiper(".showcase", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 16,
  rewind: true,

  navigation: {
    nextEl: ".showcase-btn-next",
    prevEl: ".showcase-btn-prev",
  },

  pagination: {
    el: ".showcase__pagination",
  },
});

//Слайдер карточки товара
const imageSliders = document.querySelectorAll(".image-slider");

imageSliders.forEach((el) => {
  let mySwiper = new Swiper(el, {
    direction: "horizontal",
    slidesPerView: 1,
    rewind: true,

    pagination: {
      el: el.querySelector(".image-slider__pagination"),
      clickable: true,
    },
    simulateTouch: true,
  });

  const imageSwiper = el.closest(".image-slider").swiper;
  const prevSlide = el.querySelectorAll(".slider-swipe__prev");
  // const middleSlide = el.querySelectorAll(".slider-swipe__middle");
  const nextSlide = el.querySelectorAll(".slider-swipe__next");

  prevSlide.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      imageSwiper.slidePrev(1000);
    });
  });

  nextSlide.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      imageSwiper.slideNext(1000);
    });
  });
});

//Слайдер распродажи
const saleSlider = new Swiper(".sale-slider", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 16,
  rewind: true,

  navigation: {
    nextEl: ".sale__btn-next",
    prevEl: ".sale__btn-prev",
  },

  pagination: {
    el: ".sale__pagination",
  },
});

//Слайдер выгодных покупок
const offerSlider = new Swiper(".offers__slider", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 30,
  rewind: true,

  pagination: {
    el: ".offers__pagination",
  },

  breakpoints: {
    1024: {
      enabled: false,
    },
  },
});

//Слайдер лучшие новинки
const bestofnewSlider = new Swiper(".bestofnew__slider", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 16,
  rewind: true,

  navigation: {
    nextEl: ".bestofnew-btn-next",
    prevEl: ".bestofnew-btn-prev",
  },

  pagination: {
    el: ".bestofnew-pagination",
  },
});

//Слайдер популярные бренды
const brandsSlider = new Swiper(".brands-slider", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 16,
  rewind: true,

  navigation: {
    nextEl: ".brands-slider__btn-next",
    prevEl: ".brands-slider__btn-prev",
  },

  pagination: {
    el: ".brands-slider__pagination",
  },
});

//Слайдер с отзывами
const reviewsSlider = new Swiper(".reviews-slider", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 16,
  rewind: true,

  navigation: {
    nextEl: ".reviews-slider__btn-next",
    prevEl: ".reviews-slider__btn-prev",
  },

  pagination: {
    el: ".reviews-slider__pagination",
  },
});
