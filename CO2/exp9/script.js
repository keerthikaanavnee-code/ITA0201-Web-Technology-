const products = [
    { id: 1, name: "Wireless Mouse", price: 25.00 },
    { id: 2, name: "Mechanical Keyboard", price: 85.00 },
    { id: 3, name: "HD Monitor", price: 150.00 },
    { id: 4, name: "USB-C Hub", price: 45.00 },
    { id: 5, name: "Webcam 1080p", price: 65.00 },
    { id: 6, name: "Gaming Headset", price: 55.00 }
];

let cart = [];

function renderProducts() {
    const list = document.getElementById('product-list');
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${p.name}</h3>
            <span class="price">$${p.price.toFixed(2)}</span>
            <button class="btn-add" onclick="addToCart(${p.id})">Add to Cart</button>
        `;
        list.appendChild(card);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const inCart = cart.find(item => item.id === id);

    if (inCart) {
        inCart.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCart();
}

function updateCart() {
    const container = document.getElementById('cart-items');
    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-msg">Your cart is empty</p>';
    } else {
        container.innerHTML = '';
        cart.forEach(item => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>$${item.price.toFixed(2)} x ${item.qty}</span>
                </div>
                <span>$${(item.price * item.qty).toFixed(2)}</span>
            `;
            container.appendChild(div);
        });
    }
    calculateBill();
}

function calculateBill() {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const tax = subtotal * 0.10;
    const discount = subtotal > 100 ? subtotal * 0.05 : 0;
    const total = subtotal + tax - discount;

    document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('discount').innerText = `-$${discount.toFixed(2)}`;
    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) return alert("Your cart is empty!");
    alert("Order placed successfully! Total amount: " + document.getElementById('total').innerText);
    cart = [];
    updateCart();
}

renderProducts();
