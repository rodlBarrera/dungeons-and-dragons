"use strict";

// Filtra los cards según el botón del tooltip

const allTooltip = document.querySelectorAll('button[data-value]')

const allCards = document.querySelectorAll("article[data-product-type]");

const initialPack = document.querySelector('#initial-pack');

function filterCards(tooltip, cards) {
    const tooltipValue = tooltip.getAttribute('data-value');
    if(tooltipValue === null) return;
    if(tooltipValue === 'all') {
        cards.forEach((el) => el.classList.remove('hidden'));
        initialPack.classList.remove('hidden');
        return;
    }
    
    allTooltip.forEach((el) => {
        const value = el.getAttribute('data-value');
        el.classList.toggle('selected', tooltipValue === value)
    })

    cards.forEach((el) => {
        const productType = el.getAttribute('data-product-type');
        el.classList.toggle('hidden', productType !== tooltipValue);
        initialPack.classList.add('hidden');
    })
    
}

allTooltip.forEach((el) => {
    el.addEventListener('click', (event) => {
        console.log(event.target)
        filterCards(el, allCards);
    });
})
