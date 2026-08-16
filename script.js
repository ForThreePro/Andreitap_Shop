let cart = []; 
let currentProduct = {}; 
let currentCurrency = 'mxn';

function setCurrency(curr) {
  currentCurrency = curr;
  document.querySelectorAll('.precio .mxn, .precio .cop, .precio .pen').forEach(el => el.classList.remove('show'));
  document.querySelectorAll('.precio .' + curr).forEach(el => el.classList.add('show'));
  document.getElementById('btn-mxn').classList.remove('active');
  document.getElementById('btn-cop').classList.remove('active');
  document.getElementById('btn-pen').classList.remove('active');
  document.getElementById('btn-' + curr).classList.add('active');
}

function showTab(id) { 
  document.querySelectorAll('.content').forEach(c => c.classList.remove('active')); 
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); 
  document.getElementById(id).classList.add('active'); 
  event.target.classList.add('active'); 
}

function openModal(title, priceMXN, priceCOP, pricePEN) {
  let price = currentCurrency === 'mxn' ? priceMXN : currentCurrency === 'cop' ? priceCOP : pricePEN;
  currentProduct = {title, price};
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-price').innerText = price;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() { 
  document.getElementById('modal').style.display = 'none'; 
}

function addToCart() { 
  let qty = document.getElementById('cantidad').value; 
  cart.push({...currentProduct, qty}); 
  renderCart(); 
  closeModal(); 
  alert('¡Añadido al carrito! 🎀'); 
}

function renderCart() { 
  let html = ''; 
  cart.forEach(item => { 
    html += `<div style="margin:5px 0">${item.title} x${item.qty} - ${item.price}</div>`; 
  }); 
  document.getElementById('cart-items').innerHTML = html || '<p style="text-align:center">Carrito vacío 🪷</p>'; 
}

function toggleCart() { 
  let c = document.getElementById('cart'); 
  c.style.display = c.style.display === 'block' ? 'none' : 'block'; 
}

function sendWhatsApp() { 
  if(cart.length === 0) return alert('Agrega productos primero 💗'); 
  let msg = "☁️💗 HOLA ANDREITA 💗☁️%0A%0AMi pedido:%0A"; 
  cart.forEach(item => { 
    msg += `- ${item.title} x${item.qty} - ${item.price}%0A`; 
  }); 
  msg += "%0A¡Gracias! 🎀🪷"; 
  window.open(`https://wa.me/573215829404?text=${msg}`, '_blank'); 
}