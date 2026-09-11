function comprar(producto) {
  alert(`💗 Gracias por tu interés en: ${producto}\n\nContáctame para realizar el pago 🌎\n\n*Métodos:* Nequi, Bancolombia, Transferencia MX, Diamantes, Soles, Global`);
  
  // Aquí puedes cambiar por tu WhatsApp
  let whatsapp = "https://wa.me/"; // Pon tu número aquí
  let mensaje = encodeURIComponent(`Hola! Quiero comprar: ${producto} de Andreitap Shop 💗`);
  
  if(confirm("¿Deseas ir a WhatsApp para comprar?")) {
    window.open(whatsapp + "?text=" + mensaje, '_blank');
  }
}