const products = [
  {
    id: 1,
    name: "Nike Air Zoom Sport",
    category: "Calzado",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  }
];

let cart = [];

function renderProducts() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = products.map(p => `
    <div class="card">
      <div class="card-img" style="background-image: url('${p.image}')"></div>
      <div class="card-info">
        <span class="category">${p.category}</span>
        <h3>${p.name}</h3>
        <p class="price">$${p.price.toFixed(2)}</p>
        <button class="btn-add" onclick="addToCart('${p.name}', ${p.price})">
          Agregar al Carrito
        </button>
      </div>
    </div>
  `).join('');
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
}

function updateCartUI() {
  document.getElementById('cart-badge').textContent = cart.length;
  const list = document.getElementById('cart-list');
  list.innerHTML = cart.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('');
  
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('cart-total').textContent = total.toFixed(2);
}

function toggleCart() {
  document.getElementById('cart-sidebar').classList.toggle('hidden');
}

renderProducts();