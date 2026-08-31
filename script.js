let cart = [];
let currentCountry = "MX";

const precios = {
  simple: [
    {id: "s1", nombre: "Caligráfico Simple x1", cant: 1, MX: "$20", CO: "$5.500", PE: "$3.00", DI: "100 💎"},
    {id: "s3", nombre: "Caligráfico Simple x3", cant: 3, MX: "$50", CO: "$13.500", PE: "$10.00", DI: "300 💎"},
    {id: "s5", nombre: "Caligráfico Simple x5", cant: 5, MX: "$85", CO: "$18.500", PE: "$17.00", DI: "400 💎"}
  ],
  objeto: [
    {id: "o1", nombre: "Caligráfico + Objeto x1", cant: 1, MX: "$30", CO: "$7.500", PE: "$10.00", DI: "200 💎"},
    {id: "o3", nombre: "Caligráfico + Objeto x3", cant: 3, MX: "$80", CO: "$16.500", PE: "$16.00", DI: "400 💎"},
    {id: "o5", nombre: "Caligráfico + Objeto x5", cant: 5, MX: "$130", CO: "$26.500", PE: "$26.00", DI: "700 💎"}
  ],
  tematico: [
    {id: "t1", nombre: "Caligráfico Temático x1", cant: 1, MX: "$40", CO: "$9.000", PE: "$8.00", DI: "200 💎"},
    {id: "t3", nombre: "Caligráfico Temático x3", cant: 3, MX: "$100", CO: "$24.500", PE: "$20.00", DI: "500 💎"},
    {id: "t5", nombre: "Caligráfico Temático x5", cant: 5, MX: "$170", CO: "$33.500", PE: "$34.00", DI: "800 💎"}
  ],
  botsMensual: [
    {id: "bm1", nombre: "Bot Mensual x1", cant: 1, MX: "$40", CO: "$8.500", PE: "$8.00", DI: "200 💎"},
    {id: "bm2", nombre: "Bot Mensual x2", cant: 2, MX: "$70", CO: "$14.500", PE: "$14.00", DI: "500 💎"},
    {id: "bm3", nombre: "Bot Mensual x3", cant: 3, MX: "$100", CO: "$25.000", PE: "$21.00", DI: "700 💎"}
  ],
  botsPerma: [
    {id: "bp1", nombre: "Bot Permanente x1", cant: 1, MX: "$100", CO: "$25.000", PE: "$21.00", DI: "600 💎"},
    {id: "bp2", nombre: "Bot Permanente x2", cant: 2, MX: "$180", CO: "$34.500", PE: "$36.00", DI: "1.000 💎"},
    {id: "bp3", nombre: "Bot Permanente x3", cant: 3, MX: "$260", CO: "$49.500", PE: "$52.00", DI: "2.000 💎"}
  ]
};

const pagosPorPais = {
  MX: ["Transferencia MX", "Diamantes"],
  CO: ["Nequi", "Bancolombia", "Diamantes"],
  PE: ["Yape", "PrexPex", "Diamantes"],
  DI: ["Diamantes"]
};
const banderas = { MX: "🇲🇽", CO: "🇨🇴", PE: "🇵🇪", DI: "💎" };

function addToCart(item) {
  const existe = cart.find(p => p.id === item.id);
  if(existe) existe.qty += 1;
  else cart.push({...item, qty: 1});
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(p => p.id!== id);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.reduce((a,b) => a+b.qty, 0);
  const div = document.getElementById("cartItems");
  div.innerHTML = "";
  if(cart.length === 0) div.innerHTML = "<p style='text-align:center'>Tu carrito está vacío 🎀</p>";
  cart.forEach(item => {
    div.innerHTML += `
      <div class="cart-item">
        <div>${item.nombre} x${item.qty}</div>
        <div>${item[currentCountry]} <button onclick="removeFromCart('${item.id}')">X</button></div>
      </div>
    `;
  });
}

function sendWhatsApp() {
  if(cart.length === 0) return alert("Agrega productos al carrito primero 💗");
  let mensaje = `Hola Andreitaap! Quiero hacer este pedido:\n\n`;
  cart.forEach(item => {
    mensaje += `• ${item.nombre} x${item.qty} - ${item[currentCountry]}\n`;
  });
  mensaje += `\nPaís: ${currentCountry} ${banderas[currentCountry]}`;
  window.open(`https://wa.me/573215829404?text=${encodeURIComponent(mensaje)}`, "_blank");
}

function renderPrecios(pais) {
  currentCountry = pais;
  ["simple","objeto","tematico","bots-mensual","bots-perma"].forEach(seccion => {
    const key = seccion.replace("-","");
    const data = precios[key] || precios[seccion];
    const div = document.getElementById(seccion);
    div.innerHTML = "";
    data.forEach(item => {
      div.innerHTML += `
        <div class="precio-card">
          <b>${item.nombre}</b><br>
          ${item[pais]}
          <button class="btn-add" onclick='addToCart(${JSON.stringify(item)})'>Agregar al Combo</button>
        </div>
      `;
    });
  });

  const pagosDiv = document.getElementById("pagos");
  pagosDiv.innerHTML = "";
  pagosPorPais[pais].forEach(metodo => {
    pagosDiv.innerHTML += `<span>${metodo}</span>`;
  });
  document.getElementById("flagTitle").textContent = banderas[pais];
  updateCart();
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  renderPrecios("MX");
  document.getElementById("countrySelect").addEventListener("change", (e) => renderPrecios(e.target.value));
  document.getElementById("cartBtn").onclick = () => { document.getElementById("cartSidebar").classList.add("open"); document.getElementById("cartOverlay").classList.add("show"); }
  document.getElementById("closeCart").onclick = () => { document.getElementById("cartSidebar").classList.remove("open"); document.getElementById("cartOverlay").classList.remove("show"); }
  document.getElementById("cartOverlay").onclick = () => { document.getElementById("cartSidebar").classList.remove("open"); document.getElementById("cartOverlay").classList.remove("show"); }
  document.getElementById("sendWhatsApp").onclick = sendWhatsApp;
  document.getElementById("clearCart").onclick = () => { cart = []; updateCart(); }

  // Corazones
  for(let i=0; i<15; i++){
    let heart = document.createElement("div");
    heart.innerHTML = "💗"; heart.style.position = "fixed"; heart.style.top = "-20px";
    heart.style.left = Math.random() * 100 + "vw"; heart.style.fontSize = "20px";
    heart.style.animation = `fall ${3 + Math.random()*3}s linear infinite`; heart.style.opacity = "0.6"; heart.style.zIndex = "-1";
    document.body.appendChild(heart);
  }
});
const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(110vh) rotate(360deg); opacity: 0; }`;
document.head.appendChild(style);