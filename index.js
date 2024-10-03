const products = [
    {
        id: 1,
        name: "Uang IC 1.000.000",
        category: "uang",
        price: 10000,
    },
    {
        id: 2,
        name: "House Med Marina",
        category: "asset",
        price: 17000,
    },
    {
        id: 3,
        name: "UCP siap sotot",
        category: "akun",
        price: 25000,
    },
    {
        id: 4,
        name: "Uang IC 300.000",
        category: "uang",
        price: 40000,
    },
    {
        id: 5,
        name: "Uang IC 20.000",
        category: "uang",
        price: 5000,
    },
    {
        id: 6,
        name: "House High Market",
        category: "asset",
        price: 30000,
    },
    {
        id: 7,
        name: "UCP siap trucker",
        category: "akun",
        price: 22000,
    },
    {
        id: 8,
        name: "Uang IC 250.000",
        category: "uang",
        price: 30000,
    },
    {
        id: 9,
        name: "Uang IC 5000",
        category: "uang",
        price: 2000,
    },
    {
        id: 10,
        name: "UCP Faction SAPD",
        category: "akun",
        price: 50000,
    },
    {
        id: 11,
        name: "Bisnis 24/7 Vinewood",
        category: "asset",
        price: 50000,
    },
];

const productList = document.getElementById('productList');

function displayProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Harga: Rp ${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
        `;
        productList.appendChild(productDiv);
    });
}


function addToCart(productId) {
    alert(`Produk dengan ID ${productId} telah ditambahkan ke keranjang!`);
}

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    displayProducts(filteredProducts);
});

document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => {
        const selectedCategory = category.getAttribute('data-category');
        const filteredProducts = products.filter(product => product.category === selectedCategory);
        displayProducts(filteredProducts);
    });
});


displayProducts(products);

