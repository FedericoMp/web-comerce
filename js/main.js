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
    if (shoes.length === 0) {
        container.innerHTML = `<div class="col-sm-9">
                                    <div class="card border-danger mb-4">
                                        <div class="card-body text-danger">
                                            <h5 class="card-title">Producto no encontrado</h5>
                                            <p class="card-text">Por el momento no contamos con stock del producto solicitado.<br>Intente con otros filtros. Gracias.</p>
                                        </div>
                                    </div>
                                </div>`;
    } else {
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
}

async function main() {
    // const SHOES = await getShoes();
    const productGrid = document.getElementById('product-grid');
    loadShoes(DATA, productGrid, null);

    // Desktop filter
    const typeSelect = document.getElementById('typeSelect');
    typeSelect.addEventListener('change', (e) => {
        sizeSelect.selectedIndex = 0;
        colourSelect.selectedIndex = 0;
        let filter = e.target.value.toLowerCase();
        loadShoes(DATA, productGrid, ["category", filter]);
    });

    const sizeSelect = document.getElementById('sizeSelect');
    sizeSelect.addEventListener('change', (e) => {
        typeSelect.selectedIndex = 0;
        colourSelect.selectedIndex = 0;
        let filter = +e.target.value;
        loadShoes(DATA, productGrid, ["size", filter]);
    });

    const colourSelect = document.getElementById('colourSelect');
    colourSelect.addEventListener('change', (e) => {
        typeSelect.selectedIndex = 0;
        sizeSelect.selectedIndex = 0;
        let filter = e.target.value.toLowerCase();
        loadShoes(DATA, productGrid, ["colour", filter]);
    });

    // Mobile filter
    const typeSelectM = document.getElementById('typeSelectM');
    typeSelectM.addEventListener('change', (e) => {
        sizeSelectM.selectedIndex = 0;
        colourSelectM.selectedIndex = 0;
        let filter = e.target.value.toLowerCase();
        loadShoes(DATA, productGrid, ["category", filter]);
    });

    const sizeSelectM = document.getElementById('sizeSelectM');
    sizeSelectM.addEventListener('change', (e) => {
        typeSelectM.selectedIndex = 0;
        colourSelectM.selectedIndex = 0;
        let filter = +e.target.value;
        loadShoes(DATA, productGrid, ["size", filter]);
    });

    const colourSelectM = document.getElementById('colourSelectM');
    colourSelectM.addEventListener('change', (e) => {
        typeSelectM.selectedIndex = 0;
        sizeSelectM.selectedIndex = 0;
        let filter = e.target.value.toLowerCase();
        loadShoes(DATA, productGrid, ["colour", filter]);
    });
}

main();