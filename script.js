const numeros = {
  MX: "Transferencia MX",
  CO: "Nequi / Bancolombia",
  PE: "Soles / Yape / Plin",
  DM: "Diamantes"
}

const tuNumero = "51" // CAMBIA ESTO POR TU NUMERO DE WHATSAPP SIN +

function comprar(producto, selectId) {
  let select = document.getElementById(selectId);
  let valor = select.value.split('-');
  let pais = valor[0];
  let precio = valor[1];

  let paisTexto = select.options[select.selectedIndex].text;
  let metodoPago = numeros[pais];

  let mensaje = `💗 *Hola Andreitap Shop!* 💗\n\nQuiero comprar:\n\n🛒 *Producto:* ${producto}\n💰 *Precio:* ${paisTexto}\n💳 *Método de pago:* ${metodoPago}\n\n¿Me das los datos para pagar? Gracias 🌸`;

  if(confirm(`¿Confirmar compra?\n\n${producto}\n${paisTexto}`)) {
    let url = `https://wa.me/${tuNumero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}

// Efecto al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'all 0.5s';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
});