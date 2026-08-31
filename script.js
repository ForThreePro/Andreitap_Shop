let time = 600;
const timer = document.getElementById('timer');
function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timer.textContent = `${minutes}:${seconds}`;
  if (time > 0) time--; else time = 600;
}
setInterval(updateTimer, 1000);

const selectorPais = document.getElementById('pais');
const tituloPais = document.getElementById('titulo-pais');
const precios = document.querySelectorAll('.precio');

function actualizarPrecios() {
  const pais = selectorPais.value;
  const simbolo = selectorPais.options[selectorPais.selectedIndex].dataset.simbolo;
  const nombrePais = selectorPais.options[selectorPais.selectedIndex].text;
  
  tituloPais.textContent = `Precios para ${nombrePais}`;

  precios.forEach(precio => {
    let valor = 0;
    if(pais === 'MX') valor = precio.dataset.mx;
    if(pais === 'CO') valor = precio.dataset.co;
    if(pais === 'PE') valor = precio.dataset.pe;
    if(pais === 'DIAMANTES') valor = precio.dataset.d;
    
    if(valor == 0 && (pais === 'CO' || pais === 'PE')) {
      precio.textContent = 'Cotizar';
    } else if(pais === 'DIAMANTES') {
      precio.textContent = `${valor} 💎`;
    } else {
      precio.textContent = `${simbolo}${valor}`;
    }
  });
}
selectorPais.addEventListener('change', actualizarPrecios);
actualizarPrecios();

let carrito = [];
const contadorCarrito = document.getElementById('contador-carrito');
const totalItems = document.getElementById('total-items');
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
  totalItems.textContent = carrito.length;
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
  let mensaje = `Hola Andreitap! Quiero comprar:%0A%0A${carrito.join('%0A')}%0A%0APaís: ${selectorPais.options[selectorPais.selectedIndex].text}`;
  window.open(`https://wa.me/573215829404?text=${mensaje}`, '_blank');
});