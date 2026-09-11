const tuNumero = "51"; // CAMBIA ESTO POR TU NUMERO DE WHATSAPP

const metodos = {
  MX: "Transferencia MX",
  CO: "Nequi / Bancolombia",
  PE: "Soles / Yape / Plin",
  DM: "Diamantes"
}

function comprar(producto, selectId) {
  let select = document.getElementById(selectId);
  let valor = select.value.split('-');
  let pais = valor[0];
  let precio = valor[1];

  let paisTexto = select.options[select.selectedIndex].text;
  let metodoPago = metodos[pais];

  let mensaje = `💗 *ANDREITAP SHOP* 💗\n\n🛒 *Pedido Nuevo*\n━━━━━━━━━━━\n📦 *Producto:* ${producto}\n💰 *Precio:* ${paisTexto}\n💳 *Pago:* ${metodoPago}\n━━━━━━━━━━━\n\n¿Me das los datos para pagar? ✨`;

  showToast(`Agregado: ${producto}`);

  setTimeout(() => {
    let url = `https://wa.me/${tuNumero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }, 800);
}

function showToast(texto) {
  const toast = document.getElementById('toast');
  toast.textContent = `💗 ${texto}`;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

// Scroll suave
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Crear corazones flotantes
setInterval(() => {
  const heart = document.createElement('div');
  heart.innerHTML = '💗';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.bottom = '0';
  heart.style.fontSize = '20px';
  heart.style.pointerEvents = 'none';
  heart.style.animation = 'float 10s linear';
  document.querySelector('.hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}, 3000);