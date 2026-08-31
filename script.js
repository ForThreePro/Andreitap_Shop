// 1. CONTADOR 10 MINUTOS
let time = 600;
const timer = document.getElementById('timer');
function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10? '0' + seconds : seconds;
  timer.textContent = `${minutes}:${seconds}`;
  if (time > 0) time--; else time = 600;
}
setInterval(updateTimer, 1000);


// 2. SELECTOR DE PAIS
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


// 3. CARRITO FUNCIONAL
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
    btn.style.background = '#E91E63';
    setTimeout(() => { 
      btn.textContent = 'Añadir';
      btn.style.background = '#FF69B4';
    }, 1000);
  });
});

function actualizarCarrito() {
  contadorCarrito.textContent = carrito.length;
  totalItems.textContent = carrito.length;
  listaCarrito.innerHTML = '';
  
  if(carrito.length === 0){
    listaCarrito.innerHTML = '<p style="text-align:center; color:#999;">Tu carrito está vacío 💗</p>';
  } else {
    carrito.forEach((item, index) => {
      listaCarrito.innerHTML += `
        <div class="item-carrito">
          <span>${item}</span>
          <button onclick="eliminarItem(${index})" style="background:#ff3399; color:white; border:none; border-radius:50%; width:25px; height:25px; cursor:pointer;">X</button>
        </div>`;
    });
  }
}

function eliminarItem(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

btnVerCarrito.addEventListener('click', () => { 
  ventanaCarrito.style.display = 'flex'; 
  actualizarCarrito();
});
cerrarCarrito.addEventListener('click', () => { 
  ventanaCarrito.style.display = 'none'; 
});

// Cerrar al dar click afuera
ventanaCarrito.addEventListener('click', (e) => {
  if(e.target === ventanaCarrito) ventanaCarrito.style.display = 'none';
});

btnEnviar.addEventListener('click', () => {
  if(carrito.length === 0){
    alert('Tu carrito está vacío 💗');
    return;
  }
  let mensaje = `Hola Andreitap! Quiero comprar:%0A%0A${carrito.join('%0A')}%0A%0APaís: ${selectorPais.options[selectorPais.selectedIndex].text}`;
  window.open(`https://wa.me/573215829404?text=${mensaje}`, '_blank');
});


// 4. PESTAÑAS DE CATEGORIAS
const botonesCat = document.querySelectorAll('.cat');
const secciones = document.querySelectorAll('.precios');

botonesCat.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const target = btn.getAttribute('href').substring(1);
    
    // Quitar activo a todos
    botonesCat.forEach(b => b.classList.remove('activa'));
    secciones.forEach(s => s.classList.remove('activo'));
    
    // Activar el clickeado
    btn.classList.add('activa');
    document.getElementById(target).classList.add('activo');
    
    // Scroll suave
    document.getElementById(target).scrollIntoView({behavior: 'smooth', block: 'start'});
  });
});

// Activar primera categoría al cargar
window.addEventListener('load', () => {
  if(botonesCat.length > 0 && secciones.length > 0){
    botonesCat[0].classList.add('activa');
    secciones[0].classList.add('activo');
  }
});