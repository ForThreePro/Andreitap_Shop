const tuNumero = "573215829404"; // PON TU NUMERO DE WHATSAPP AQUI

function updatePago(select) {
  let pago = select.options[select.selectedIndex].getAttribute('data-pago');
  let id = select.id;
  document.getElementById('pago-' + id).textContent = `💳 Método: ${pago}`;
}

function comprar(producto, selectId) {
  let select = document.getElementById(selectId);
  let valor = select.value.split('-');
  let pais = valor[0];
  let precio = valor[1];
  let paisTexto = select.options[select.selectedIndex].text;
  let metodoPago = select.options[select.selectedIndex].getAttribute('data-pago');

  let mensaje = `💗 *ANDREITAP SHOP* 💗\n\n🛒 *Pedido Nuevo*\n━━━━━━━━━━━\n📦 *Producto:* ${producto}\n💰 *Precio:* ${paisTexto}\n💳 *Método de Pago:* ${metodoPago}\n━━━━━━━━━━━\n\n¿Me das los datos para pagar? ✨`;

  showToast(`Enviando pedido: ${producto}`);

  setTimeout(() => {
    let url = `https://wa.me/${tuNumero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }, 600);
}

function showToast(texto) {
  const toast = document.getElementById('toast');
  toast.textContent = `💗 ${texto}`;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 2500);
}

// Scroll suave
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});