const cartItems = [
    { id: 1, name: "Uang IC", price: 10000, quantity: 2 },
    { id: 2, name: "Jaket Stylish", price: 150000, quantity: 1 },
    { id: 3, name: "Lipstik Mewah", price: 75000, quantity: 3 }
];

const cartItemsContainer = document.getElementById('cartItems');
const totalPriceElement = document.getElementById('totalPrice');

function displayCartItems() {
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <div>${item.name} (x${item.quantity})</div>
            <div>Rp ${itemTotal.toLocaleString()}</div>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    totalPriceElement.textContent = `Rp ${totalPrice.toLocaleString()}`;
}

document.getElementById('checkoutButton').addEventListener('click', () => {
    alert('Anda akan melanjutkan ke pembayaran!');
});

// Tampilkan item keranjang saat halaman dimuat
displayCartItems();
