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
  {
    id: 7,
    name: "Camiseta Dry-Fit de Entrenamiento",
    category: "Ropa",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Botella de Agua Acero Inox. 1L",
    category: "Accesorios",
    price: 18.50,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Mochila Deportiva Impermeable",
    category: "Accesorios",
    price: 48.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Bicleta electrica estatica",
    category: "Equipamiento",
    price: 151.99,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 11,
    name: "Gorra Deportiva Transpirable",
    category: "Accesorios",
    price: 22.50,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "Kettlebell de Hierro Fundido 12kg",
    category: "Equipamiento",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop"
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