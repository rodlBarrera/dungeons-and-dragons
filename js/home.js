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