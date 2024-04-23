"use strict";

// Variable
const menu_hamb_Dom = document.querySelector('#menu-hamb');
const menu_Dom = document.querySelector('.menu');
const menu_subMenu_Dom = document.querySelector('li[data-type="menuSub"]');


// Abrir / cerrar menu desplegable en tamaño celular
menu_hamb_Dom.addEventListener('click', () => {
    menu_Dom.classList.toggle('open');
});

// Abrir / cerrar submenu de herramientas en responsive
if(window.matchMedia('(max-width: 768px)').matches) {
    menu_subMenu_Dom.classList.remove('open');
    menu_subMenu_Dom.addEventListener('click', () => {
        menu_subMenu_Dom.classList.toggle('open');
    });
}