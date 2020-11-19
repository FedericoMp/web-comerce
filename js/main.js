import { DATA } from './data.js';

// For local test
// async function getShoes() {
//     return fetch('../data/data.json', {
//                 method: 'GET',
//                 mode: 'same-origin',
//                 headers: { 'Content-Type': 'application/json' }
//             })
//             .then(res => res.json());
// }

function loadShoes(items, container, filter) {
    let { shoes } = items;
    let tag;
    if (filter) {
        container.innerHTML = '';
        switch (filter[0]) {
            case "category":
                shoes = shoes.filter(el => el.category === filter[1]);
                break;
            case "size":
                shoes = shoes.filter(el => el.size === filter[1]);
                break;
            case "colour":
                shoes = shoes.filter(el => el.colour === filter[1]);
                break;
        }
    }
    shoes.forEach(el => {
        tag = `<div class="col-sm-6 col-md-4 col-lg-4">
                        <div class="card mb-4 shadow-sm shoe-container">
                            <img src="${el.img}" class="card-img-top shoes-img" alt="${el.name}" width="100%">
                            <div class="card-body">
                            <h5 class="card-title">${el.name}</h5>
                            <p class="card-text">$${el.price}</p>
                            </div>
                        </div>
                    </div>`;
        container.innerHTML += tag;
    });
}

async function main() {
    // const SHOES = await getShoes();
    const productGrid = document.getElementById('product-grid');
    loadShoes(DATA, productGrid, null);

    document.getElementById('shoesSearch').addEventListener('click', () => {
        loadShoes(SHOES, productGrid, ["category", "shoes"]);
    });

    document.getElementById('thirtySixSearch').addEventListener('click', () => {
        loadShoes(SHOES, productGrid, ["size", 36]);
    });
        
    document.getElementById('yellowSearch').addEventListener('click', () => {
        loadShoes(SHOES, productGrid, ["colour", "amarillo"]);
    });
}

main();