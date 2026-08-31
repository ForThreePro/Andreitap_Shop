// 1. SELECTOR DE PAIS
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

    if(pais === 'DIAMANTES') {
      precio.textContent = 'Cotizar';
    }
    else if(valor == 0 && (pais === 'CO' || pais === 'PE')) {
      precio.textContent = 'Cotizar';
    }
    else {
      precio.textContent = `${simbolo}${valor}`;
    }
  });
}
selectorPais.addEventListener('change', actualizarPrecios);
actualizarPrecios();

// 2. CARRITO FUNCIONAL SIN CANTIDAD
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
    setTimeout(() => { btn.textContent = 'Añadir'; }, 800);
  });
});

function actualizarCarrito() {
  contadorCarrito.textContent = carrito.length;
  totalItems.textContent = carrito.length;
  listaCarrito.innerHTML = '';
  if(carrito.length === 0){
    listaCarrito.innerHTML = '<p style="text-align:center; color:#999; padding:20px;">Tu carrito está vacío 💗</p>';
  } else {
    carrito.forEach((item, index) => {
      listaCarrito.innerHTML += `
        <div class="item-carrito">
          <span>🎀 ${item}</span>
          <button onclick="eliminarItem(${index})" style="background:#ff3399; color:white; border:none; border-radius:50%; width:28px; height:28px; cursor:pointer; font-weight:700;">X</button>
        </div>`;
    });
  }
}

function eliminarItem(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

btnVerCarrito.addEventListener('click', () => { ventanaCarrito.style.display = 'flex'; });
cerrarCarrito.addEventListener('click', () => { ventanaCarrito.style.display = 'none'; });
ventanaCarrito.addEventListener('click', (e) => { if(e.target === ventanaCarrito) ventanaCarrito.style.display = 'none'; });

// MENSAJE HELLO KITTY
btnEnviar.addEventListener('click', () => {
  if(carrito.length === 0){ alert('Tu carrito está vacío 💗'); return; }

  let lista = '';
  carrito.forEach(item => {
    lista += `🎀 ${item}%0A`;
  });

  let pais = selectorPais.options[selectorPais.selectedIndex].text;
  let mensaje = `*🌸 HOLA ANDREITAP 🌸*%0A%0A`;
  mensaje += `*Quiero hacer este pedido:*%0A%0A`;
  mensaje += `${lista}%0A`;
  mensaje += `*📍 País:* ${pais}%0A`;
  mensaje += `*🛒 Total de productos:* ${carrito.length}%0A%0A`;
  mensaje += `*Método de pago:* 💎 Diamantes / Nequi / Bancolombia%0A%0A`;
  mensaje += `¡Gracias por tu atención! ☁️💗`;

  window.open(`https://wa.me/573215829404?text=${mensaje}`, '_blank');
});

// 3. PESTAÑAS DE CATEGORIAS
const botonesCat = document.querySelectorAll('.cat');
const secciones = document.querySelectorAll('.precios');

botonesCat.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const target = btn.getAttribute('href').substring(1);
    botonesCat.forEach(b => b.classList.remove('activa'));
    secciones.forEach(s => s.classList.remove('activo'));
    btn.classList.add('activa');
    document.getElementById(target).classList.add('activo');
    document.getElementById(target).scrollIntoView({behavior: 'smooth', block: 'start'});
  });
});

window.addEventListener('load', () => {
  if(botonesCat.length > 0 && secciones.length > 0){
    botonesCat[0].classList.add('activa');
    secciones[0].classList.add('activo');
  }
});