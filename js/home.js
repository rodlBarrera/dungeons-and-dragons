"use strict";

// Abrir y cerrar los slides de la sección Herramientas

// Variables
const playerTool = document.querySelector("#tools-player");
const dungeonMasterTool = document.querySelector("#tools-dungeon-master");
const rulesTool = document.querySelector("#tools-rules");

// Función
function toggleElementState(element, hideElements) {
  const isOpened = element.classList.contains("opened");
  element.classList.toggle("opened");

  hideElements.forEach((el) => el.classList.toggle("hiddenToggle", !isOpened));
}

// Eventos
playerTool.addEventListener("click", () => {
  toggleElementState(playerTool, [dungeonMasterTool, rulesTool]);
});

dungeonMasterTool.addEventListener("click", () => {
  toggleElementState(dungeonMasterTool, [playerTool, rulesTool]);
});

rulesTool.addEventListener("click", () => {
  toggleElementState(rulesTool, [playerTool, dungeonMasterTool]);
});

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
