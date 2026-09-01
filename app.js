const products = [
  {
    id: 1,
    name: "Nike Air Zoom Sport",
    category: "Calzado",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    id: 2,
    name: "Balón Oficial de Fútbol",
    category: "Equipamiento",
    price: 34.50,
    image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?w=500"
  },
  {
    id: 3,
    name: "Smartwatch Deportivo Pro",
    category: "Accesorios",
    price: 199.00,
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500"
  },
  {
    id: 4,
    name: "Tacos de Fútbol Profesional",
    category: "Calzado",
    price: 95.99,
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500"
  },
  {
    id: 5,
    name: "Set de Mancuernas de Acero",
    category: "Equipamiento",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Mat de Yoga Fitness (Morado)",
    category: "Equipamiento",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=600&auto=format&fit=crop"
  },
  
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