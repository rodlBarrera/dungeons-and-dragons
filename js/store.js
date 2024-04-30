"use strict";

// Filtra los cards según el tipo de filtrado
const allbadget = document.querySelectorAll('button[data-value]');

const btnFilter = document.querySelector('#products .tabs .filter');

const menuFilter = document.querySelector('#products .menu-filter');

const allCards = document.querySelectorAll("article[data-product-type]");

const initialPack = document.querySelector('#initial-pack');

const productsList = document.querySelector('#products .grid');

function filterCards(badget, cards) {
    const badgetValue = badget.getAttribute('data-value');
    const btnFilterCords = btnFilter.getBoundingClientRect();

    if(badgetValue === null) return;
    if(badgetValue === 'all') {
        allbadget.forEach((el) =>  el.classList.toggle('selected', el.getAttribute('data-value') === badgetValue))
        cards.forEach((el) => el.classList.remove('hidden'));
        initialPack.classList.remove('hidden');
        btnFilter.classList.remove('active');
        menuFilter.classList.remove('open');
        return;
    }
    
    allbadget.forEach((el) => {
        const value = el.getAttribute('data-value');
        el.classList.toggle('selected', badgetValue === value)
    })

    cards.forEach((el) => {
        const productType = el.getAttribute('data-product-type');
        el.classList.toggle('hidden', productType !== badgetValue);
        initialPack.classList.add('hidden');
        btnFilter.classList.remove('active');
        menuFilter.classList.remove('open');
    })
    
}

allbadget.forEach((el) => {
    el.addEventListener('click', (event) => {
        filterCards(el, allCards);
    });
})

btnFilter.addEventListener('click', () => {
    btnFilter.classList.toggle('active');
    menuFilter.classList.toggle('open', btnFilter.classList.contains('active'));
});


// Ordenar la lista de productos
const btn = document.querySelectorAll('button.sort');

const sortDataValueOptions = {
    asc: 'asc',
    desc: 'desc',
    all: 'all'
}

let arrayListCard = [];

btn.forEach((btn) => {
const imgSort = btn.querySelector('img');

btn.addEventListener('click', () => {
    const sortValue = btn.getAttribute('data-sort');

    switch(sortValue) {
        case sortDataValueOptions.asc:
            btn.setAttribute('data-sort', sortDataValueOptions.desc);
            imgSort.src = `../assets/img/sort_icon_${sortDataValueOptions.desc}.svg`;
            imgSort.alt = 'Icono para ordenar de forma descendente';
            sortProductList('desc', allCards);
            initialPack.classList.add('hidden');
            break;
        
        case sortDataValueOptions.desc:
            btn.setAttribute('data-sort', sortDataValueOptions.all);
            imgSort.src = `../assets/img/sort_icon_${sortDataValueOptions.all}.svg`;
            imgSort.alt = 'Icono para ordenar';
            sortProductList('all', allCards);
            initialPack.classList.remove('hidden');
            break;
        
        case sortDataValueOptions.all:
            btn.setAttribute('data-sort', sortDataValueOptions.asc);
            imgSort.src = `../assets/img/sort_icon_${sortDataValueOptions.asc}.svg`;
            imgSort.alt = 'Icono para ordenar de forma ascendente';
            sortProductList('asc', allCards);
            initialPack.classList.add('hidden');
            break;

        default:
            btn.setAttribute('data-sort', sortDataValueOptions.all);
            imgSort.src = `../assets/img/sort_icon_${sortDataValueOptions.all}.svg`;
            imgSort.alt = 'Icono para ordenar';
            sortProductList('all', allCards);
            initialPack.classList.remove('hidden');
            break;
    }

    btn.appendChild(imgSort);
    
});
});

function sortProductList(order, cards) {
    let itemsArray = Array.from(cards);

    if(order === 'asc') {
        itemsArray.sort((a, b) => {
            return a.querySelector('.name').innerText.localeCompare(b.querySelector('.name').innerText);
        });
    } else if(order === 'desc') {
        itemsArray.sort((a, b) => {
            return b.querySelector('.name').innerText.localeCompare(a.querySelector('.name').innerText);
        });
    }
    
    itemsArray.forEach((item) => {
        productsList.appendChild(item);
    });
}


// Buscar productos de forma dinámica
const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', (event) => {
    const searchValue = event.target.value.toLowerCase();

    if(searchValue.length === 0) {
        allCards.forEach((el) => {
            el.classList.remove('hidden');
        });
        initialPack.classList.remove('hidden');
        return;
    }

    allCards.forEach((el) => {
        const productName = el.querySelector('.name').innerText.toLowerCase();
        el.classList.toggle('hidden', !productName.includes(searchValue));
        initialPack.classList.add('hidden');
    });
});
