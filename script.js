let cart = []; let currentCountry = "MX";

const precios = {
  simple: [
    {id: "s1", nombre: "Caligráfico Simple x1", MX: 20, CO: 5500, PE: 3.00, DI: 100, tipo: "ambos"},
    {id: "s3", nombre: "Caligráfico Simple x3", MX: 50, CO: 13500, PE: 10.00, DI: 300, tipo: "ambos"},
    {id: "s5", nombre: "Caligráfico Simple x5", MX: 85, CO: 18500, PE: 17.00, DI: 400, tipo: "ambos"}
  ],
  objeto: [
    {id: "o1", nombre: "Caligráfico + Objeto x1", MX: 30, CO: 7500, PE: 10.00, DI: 200, tipo: "ambos"},
    {id: "o3", nombre: "Caligráfico + Objeto x3", MX: 80, CO: 16500, PE: 16.00, DI: 400, tipo: "ambos"},
    {id: "o5", nombre: "Caligráfico + Objeto x5", MX: 130, CO: 26500, PE: 26.00, DI: 700, tipo: "ambos"}
  ],
  tematico: [
    {id: "t1", nombre: "Caligráfico Temático x1", MX: 40, CO: 9000, PE: 8.00, DI: 200, tipo: "ambos"},
    {id: "t3", nombre: "Caligráfico Temático x3", MX: 100, CO: 24500, PE: 20.00, DI: 500, tipo: "ambos"},
    {id: "t5", nombre: "Caligráfico Temático x5", MX: 170, CO: 33500, PE: 34.00, DI: 800, tipo: "ambos"}
  ],
  botsMensual: [
    {id: "bm1", nombre: "Bot Mensual x1", MX: 40, CO: 8500, PE: 8.00, DI: 200, tipo: "ambos"},
    {id: "bm2", nombre: "Bot Mensual x2", MX: 70, CO: 14500, PE: 14.00, DI: 500, tipo: "ambos"},
    {id: "bm3", nombre: "Bot Mensual x3", MX: 100, CO: 25000, PE: 21.00, DI: 700, tipo: "ambos"}
  ],
  botsPerma: [
    {id: "bp1", nombre: "Bot Permanente x1", MX: 100, CO: 25000, PE: 21.00, DI: 600, tipo: "ambos"},
    {id: "bp2", nombre: "Bot Permanente x2", MX: 180, CO: 34500, PE: 36.00, DI: 1000, tipo: "ambos"},
    {id: "bp3", nombre: "Bot Permanente x3", MX: 260, CO: 49500, PE: 52.00, DI: 2000, tipo: "ambos"}
  ],
  recargas: [
    {id: "r110", nombre: "Recarga 110 💎", DI: 110, tipo: "DI"},
    {id: "r341", nombre: "Recarga 341 💎", DI: 341, tipo: "DI"},
    {id: "r572", nombre: "Recarga 572 💎", DI: 572, tipo: "DI"},
    {id: "r1166", nombre: "Recarga 1166 💎", DI: 1166, tipo: "DI"},
    {id: "r2398", nombre: "Recarga 2398 💎", DI: 2398, tipo: "DI"},
    {id: "r6160", nombre: "Recarga 6160 💎", DI: 6160, tipo: "DI"}
  ],
  paquetes: [
    {id: "p110", nombre: "Paquete 110 💎", DI: 110, tipo: "DI"},
    {id: "p341", nombre: "Paquete 341 💎", DI: 341, tipo: "DI"},
    {id: "p572", nombre: "Paquete 572 💎", DI: 572, tipo: "DI"},
    {id: "p1166", nombre: "Paquete 1,166 💎", DI: 1166, tipo: "DI"},
    {id: "p2398", nombre: "Paquete 2,398 💎", DI: 2398, tipo: "DI"},
    {id: "p6160", nombre: "Paquete 6,160 💎", DI: 6160, tipo: "DI"}
  ],
  otros: [
    {id: "pb1", nombre: "Pase Booyah - Por código de escuadra", DI: 40, tipo: "DI"},
    {id: "pb2", nombre: "Dos pases Booyah - Por código", DI: 65, tipo: "DI"},
    {id: "pb3", nombre: "Pase Booyah - Por ID", DI: 65, tipo: "DI"},
    {id: "ts", nombre: "T. Semanal", DI: 40, tipo: "DI"},
    {id: "tm", nombre: "T. Mensual", DI: 150, tipo: "DI"}
  ],
  streaming: [
    {id: "d1", nombre: "Disney+ Completa 1M con panel", MX: 75, tipo: "MX"},
    {id: "d2", nombre: "Disney+ Perfil 1 Mes", MX: 20, tipo: "MX"},
    {id: "n1", nombre: "Netflix Perfil", MX: 55, tipo: "MX"},
    {id: "n2", nombre: "Netflix Completa", MX: 240, tipo: "MX"}
  ],
  documentos: [
    {id: "doc1", nombre: "Recetas médicas IMSS", MX: 45, tipo: "MX"},
    {id: "doc4", nombre: "Actas Nacimiento, Matrimonio", MX: 25, tipo: "MX"}
  ]
};

const pagosPorPais = {
  MX: ["Transferencia mx", "Diamantes"],
  CO: ["Nequi", "Bancolombia", "Diamantes"],
  PE: ["Yape", "PrexPex", "Diamantes"],
  DI: ["Diamantes"]
};
const banderas = { MX: "🇲🇽", CO: "🇨🇴", PE: "🇵🇪", DI: "💎" };

function formatoPrecio(valor, pais) {
  if(!valor) return "";
  if(pais === "DI") return `${valor} 💎`;
  if(pais === "CO") return `$${valor.toLocaleString()}`;
  if(pais === "PE") return `$${valor.toFixed(2)}`;
  return `$${valor} mx`;
}

function addToCart(item) {
  const existe = cart.find(p => p.id === item.id);
  if(existe) existe.qty += 1; else cart.push({...item, qty: 1});
  updateCart();
}
function removeFromCart(id) { cart = cart.filter(p => p.id!== id); updateCart(); }

function updateCart() {
  document.getElementById("cartCount").textContent = cart.reduce((a,b) => a+b.qty, 0);
  const div = document.getElementById("cartItems"); let total = 0; div.innerHTML = "";
  if(cart.length === 0) div.innerHTML = "<p style='text-align:center'>Tu carrito está vacío 🎀</p>";
  cart.forEach(item => {
    const precio = (item[currentCountry] || 0) * item.qty; total += precio;
    div.innerHTML += `<div class="cart-item"><div>${item.nombre} x${item.qty}</div><div>${formatoPrecio(precio, currentCountry)} <button onclick="removeFromCart('${item.id}')">X</button></div></div>`;
  });
  document.getElementById("cartTotal").textContent = formatoPrecio(total, currentCountry);
  document.getElementById("paymentMethods").innerHTML = `<div class="payment-box"><b>Métodos de pago:</b><br>${pagosPorPais[currentCountry].join(" - ")}</div>`;
}

function sendWhatsApp() {
  if(cart.length === 0) return alert("Agrega productos al carrito primero 💗");
  let mensaje = `Hola Andreitaap! Quiero hacer este pedido: 🎀\n\n`;
  cart.forEach(item => { mensaje += `• ${item.nombre} x${item.qty} - ${formatoPrecio((item[currentCountry]||0) * item.qty, currentCountry)}\n`; });
  mensaje += `\nTotal: ${document.getElementById("cartTotal").textContent}\nPaís: ${currentCountry} ${banderas[currentCountry]}`;
  window.open(`https://wa.me/573215829404?text=${encodeURIComponent(mensaje)}`, "_blank");
}

function openComboModal() {
  document.getElementById("comboModal").style.display = "block";
  const div = document.getElementById("comboProducts"); div.innerHTML = "";
  Object.values(precios).flat().forEach(item => {
    if((item.tipo === "ambos" || item.tipo === currentCountry) && item[currentCountry]){
      div.innerHTML += `<div class="combo-item"><input type="checkbox" id="${item.id}" data-id="${item.id}"><label for="${item.id}">${item.nombre} - ${formatoPrecio(item[currentCountry], currentCountry)}</label></div>`;
    }
  });
}

function addComboToCart() {
  const checked = document.querySelectorAll("#comboProducts input:checked");
  if(checked.length < 2) return alert("Selecciona mínimo 2 productos 🎀");
  checked.forEach(cb => { const item = Object.values(precios).flat().find(p => p.id === cb.dataset.id); addToCart(item); });
  document.getElementById("comboModal").style.display = "none";
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("show");
}

function renderPrecios(pais) {
  currentCountry = pais;
  document.getElementById("section-ambos").style.display = "block";
  document.getElementById("section-di").style.display = pais === "DI"? "block" : "none";
  document.getElementById("section-mx").style.display = pais === "MX"? "block" : "none";

  const pagosDiv = document.getElementById("pagos"); pagosDiv.innerHTML = "";
  pagosPorPais[pais].forEach(metodo => { pagosDiv.innerHTML += `<span>${metodo}</span>`; });

  Object.keys(precios).forEach(seccion => {
    const div = document.getElementById(seccion); if(!div) return; div.innerHTML = "";
    precios[seccion].forEach(item => {
      if((item.tipo === "ambos" || item.tipo === pais) && item[pais]){
        div.innerHTML += `<div class="precio-card"><div class="precio-info"><b>${item.nombre}</b><br><span class="precio-precio">${formatoPrecio(item[pais], pais)}</span></div><button class="btn-add" onclick='addToCart(${JSON.stringify(item)})'>Añadir al carrito 🛒</button></div>`;
      }
    });
  });
  document.getElementById("flagTitle").textContent = banderas[pais]; updateCart();
}

document.addEventListener("DOMContentLoaded", () => {
  renderPrecios("MX");
  document.getElementById("countrySelect").addEventListener("change", (e) => renderPrecios(e.target.value));
  document.getElementById("comboBtn").onclick = openComboModal;
  document.getElementById("cartBtn").onclick = () => { document.getElementById("cartSidebar").classList.add("open"); document.getElementById("cartOverlay").classList.add("show"); }
  document.getElementById("closeCart").onclick = () => { document.getElementById("cartSidebar").classList.remove("open"); document.getElementById("cartOverlay").classList.remove("show"); }
  document.getElementById("cartOverlay").onclick = () => { document.getElementById("cartSidebar").classList.remove("open"); document.getElementById("cartOverlay").classList.remove("show"); }
  document.getElementById("sendWhatsApp").onclick = sendWhatsApp;
  document.getElementById("clearCart").onclick = () => { cart = []; updateCart(); }
  document.getElementById("closeCombo").onclick = () => document.getElementById("comboModal").style.display = "none";
  document.getElementById("addComboBtn").onclick = addComboToCart;
});