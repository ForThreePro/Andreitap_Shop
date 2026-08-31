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
    
    if(valor == 0 && pais != 'MX') {
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
const botonesCarrito = document.querySelectorAll('.btn-carrito');
const whatsappBtn = document.querySelector('.whatsapp-btn');

botonesCarrito.forEach(btn => {
  btn.addEventListener('click', () => {
    const nombre = btn.dataset.nombre;
    carrito.push(nombre);
    contadorCarrito.textContent = carrito.length;
    btn.textContent = '✓ Añadido';
    btn.style.background = '#ff66b3';
    setTimeout(() => {
      btn.textContent = 'Añadir';
      btn.style.background = '#25D366';
    }, 1000);
    
    let mensaje = `Hola! Soy de Andreitap Ventas y quiero comprar:%0A%0A${carrito.join('%0A')}`;
    whatsappBtn.href = `https://wa.me/573215829404?text=${mensaje}`;
  });
});