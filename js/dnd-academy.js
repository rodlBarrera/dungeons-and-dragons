"use strict";

// Función para cambiar el estado de las opciones y secciones
function selectOptionAndSection(option, section) {
  const allOptions = document.querySelectorAll(".btn-option");
  const allSections = document.querySelectorAll(".academy-content");

  allOptions.forEach((opt) => opt.classList.remove("selected"));
  option.classList.add("selected");

  allSections.forEach((sec) => sec.classList.add("hidden"));
  section.classList.remove("hidden");
}

// Variables
const optionWhatIsDnD = document.querySelector("#option-what-is-dnd");
const optionHowPlayDnD = document.querySelector("#option-how-play-dnd");
const optionHowCreateCharacter = document.querySelector(
  "#option-how-create-character"
);
const optionResource = document.querySelector("#option-resource");

const sectionWhatIsDnD = document.querySelector("#section-what-is-dnd");
const sectionHowPlayDnD = document.querySelector("#section-how-play-dnd");
const sectionHowCreateCharacter = document.querySelector(
  "#section-how-create-character"
);
const sectionResource = document.querySelector("#section-resource");

// Eventos
optionWhatIsDnD.addEventListener("click", () => {
  selectOptionAndSection(optionWhatIsDnD, sectionWhatIsDnD);
});

optionHowPlayDnD.addEventListener("click", () => {
  selectOptionAndSection(optionHowPlayDnD, sectionHowPlayDnD);
});

optionHowCreateCharacter.addEventListener("click", () => {
  selectOptionAndSection(optionHowCreateCharacter, sectionHowCreateCharacter);
});

optionResource.addEventListener("click", () => {
  selectOptionAndSection(optionResource, sectionResource);
});
