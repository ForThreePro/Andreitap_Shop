// TODO LO ANTERIOR DEL CONTADOR Y SELECTOR IGUAL

let carrito = [];
const contadorCarrito = document.getElementById('contador-carrito');
const botonesCarrito = document.querySelectorAll('.btn-carrito');
const btnVerCarrito = document.getElementById('btn-ver-carrito');
const ventanaCarrito = document.getElementById('ventana-carrito');
const cerrarCarrito = document.getElementById('cerrar-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const btnEnviar = document.getElementById('enviar-whatsapp');

botonesCarrito.forEach(btn => {
  btn.addEventListener('click', () => {
    const nombre = btn.dataset.nombre;
    carrito.push(nombre);
    actualizarCarrito();
    btn.textContent = '✓ Añadido';
    setTimeout(() => { btn.textContent = 'Añadir'; }, 1000);
  });
});

function actualizarCarrito() {
  contadorCarrito.textContent = carrito.length;
  listaCarrito.innerHTML = '';
  carrito.forEach((item, index) => {
    listaCarrito.innerHTML += `<div class="item-carrito"><span>${item}</span><button onclick="eliminarItem(${index})">X</button></div>`;
  });
}

function eliminarItem(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

btnVerCarrito.addEventListener('click', () => { ventanaCarrito.style.display = 'flex'; });
cerrarCarrito.addEventListener('click', () => { ventanaCarrito.style.display = 'none'; });

btnEnviar.addEventListener('click', () => {
  let mensaje = `Hola Andreitap! Quiero comprar:%0A%0A${carrito.join('%0A')}`;
  window.open(`https://wa.me/573215829404?text=${mensaje}`, '_blank');
});