// Carrusel de productos

//SwiperJs
const swiper = new Swiper(".storeSlider", {
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        enabled: true,
        delay: 2500,
      },
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        enabled: true,
        delay: 2500,
      },
    },
    428: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        enabled: true,
        delay: 2500,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      autoplay: {
        enabled: true,
        delay: 2500,
      },
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
