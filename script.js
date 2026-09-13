let paisActual = 'mx'; // por defecto Mexico
const numeroWPP = "51999999"; // CAMBIA TU NUMERO

// TODOS LOS PRODUCTOS CON PRECIOS
const productos = [
    // Caligraficos
    {cat: "CALIGRÁFICO SIMPLE", nombre: "1 Caligráfico", precios: {mx: 20, co: 5500, pe: 3.00, diam: 100}},
    {cat: "CALIGRÁFICO SIMPLE", nombre: "3 Caligráficos", precios: {mx: 50, co: 13500, pe: 10.00, diam: 300}},
    {cat: "CALIGRÁFICO SIMPLE", nombre: "5 Caligráficos", precios: {mx: 85, co: 18500, pe: 17.00, diam: 400}},
    
    {cat: "CALIGRÁFICO MÁS OBJETO", nombre: "1 Caligráfico + Objeto", precios: {mx: 30, co: 7500, pe: 10.00, diam: 200}},
    {cat: "CALIGRÁFICO MÁS OBJETO", nombre: "3 Caligráficos + Objeto", precios: {mx: 80, co: 16500, pe: 16.00, diam: 400}},
    {cat: "CALIGRÁFICO MÁS OBJETO", nombre: "5 Caligráficos + Objeto", precios: {mx: 130, co: 26500, pe: 26.00, diam: 700}},
    
    {cat: "CALIGRÁFICO TEMÁTICO", nombre: "1 Caligráfico Temático", precios: {mx: 40, co: 9000, pe: 8.00, diam: 200}},
    {cat: "CALIGRÁFICO TEMÁTICO", nombre: "3 Caligráficos Temáticos", precios: {mx: 100, co: 24500, pe: 20.00, diam: 500}},
    {cat: "CALIGRÁFICO TEMÁTICO", nombre: "5 Caligráficos Temáticos", precios: {mx: 170, co: 33500, pe: 34.00, diam: 800}},
    
    // Bots
    {cat: "BOTS MENSUALES", nombre: "1 Bot Mensual", precios: {mx: 40, co: 8500, pe: 8.00, diam: 200}},
    {cat: "BOTS MENSUALES", nombre: "2 Bots Mensuales", precios: {mx: 70, co: 14500, pe: 14.00, diam: 500}},
    {cat: "BOTS MENSUALES", nombre: "3 Bots Mensuales", precios: {mx: 100, co: 25000, pe: 21.00, diam: 700}},
    
    {cat: "BOTS PERMANENTES", nombre: "1 Bot Permanente", precios: {mx: 100, co: 25000, pe: 21.00, diam: 600}},
    {cat: "BOTS PERMANENTES", nombre: "2 Bots Permanentes", precios: {mx: 180, co: 34500, pe: 36.00, diam: 1000}},
    {cat: "BOTS PERMANENTES", nombre: "3 Bots Permanentes", precios: {mx: 260, co: 49500, pe: 52.00, diam: 2000}},
];

const streamings = [
    {titulo: "🎬 DISNEY+", items: ["Completa 1M con panel: $75", "Perfil 1 Mes: $20", "Completa 1M sin panel: $65"]},
    {titulo: "📺 PRIME VIDEO", items: ["Perfil 1 Mes: $18", "Completa 1 Mes: $45"]},
    {titulo: "🍿 NETFLIX", items: ["Perfil: $55", "Completa: $240"]},
    {titulo: "📡 PARAMOUNT", items: ["Perfil 1 Mes: $15", "Completa 1 Mes: $50"]},
    {titulo: "📌 HBO MAX + HULU", items: ["Perfil 1 Mes: $18", "Completa: $50"]},
    {titulo: "🎞️ VIX PREMIUM", items: ["Perfil 1 Mes: $10", "Completa: $25"]},
];

const metodos = ["Nequi", "Bancolombia", "Transferencia MX", "Diamantes", "Yape", "Prex", "Global"];

// FORMATEAR PRECIO SEGUN PAIS
function formatearPrecio(precio, pais) {
    if(pais === 'mx') return `$${precio} 🇲🇽`;
    if(pais === 'co') return `$${precio.toLocaleString()} 🇨🇴`;
    if(pais === 'pe') return `$${precio.toFixed(2)} 🇵🇪`;
    if(pais === 'diam') return `${precio} 💎`;
}

// CARGAR PRODUCTOS CALIGRAFICOS
function cargarProductos() {
    const contenedor = document.getElementById('productosCaligraficos');
    contenedor.innerHTML = '';
    let catActual = '';
    
    productos.forEach(p => {
        if(p.cat !== catActual){
            catActual = p.cat;
            contenedor.innerHTML += `<div class="subtitulo">${catActual}</div>`;
        }
        
        const precio = formatearPrecio(p.precios[paisActual], paisActual);
        contenedor.innerHTML += `
        <div class="producto-card">
            <div>
                <b>${p.nombre}</b><br>
                <span class="precio">${precio}</span>
            </div>
            <button class="btn-comprar" onclick="comprar('${p.nombre}', '${precio}')">Comprar</button>
        </div>
        `;
    });
    
    if(paisActual === 'diam') contenedor.innerHTML += `<p style="text-align:center; margin-top:10px;">Más grupos y más tiempo se cotiza</p>`;
}

// CARGAR STREAMINGS
function cargarStreamings() {
    const grid = document.getElementById('streamGrid');
    grid.innerHTML = '';
    streamings.forEach(s => {
        grid.innerHTML += `
        <div class="card">
            <h3>${s.titulo}</h3>
            ${s.items.join('<br>')}
            <button class="btn-comprar" onclick="comprar('${s.titulo}', 'ver precio')">Comprar</button>
        </div>`;
    });
}

// CARGAR METODOS
function cargarMetodos() {
    const metodosDiv = document.getElementById('metodosPago');
    metodos.forEach(m => {
        metodosDiv.innerHTML += `<span class="metodo">${m}</span>`;
    });
}

// CAMBIAR PAIS
function cambiarPais() {
    paisActual = document.getElementById('selectorPais').value;
    cargarProductos();
}

// BOTON COMPRAR
function comprar(producto, precio) {
    let mensaje = `Hola AndreitaP 💗\n\nQuiero comprar:\n*Producto:* ${producto}\n*Precio:* ${precio}\n\n¿Me das info para pagar?`;
    window.open(`https://wa.me/${numeroWPP}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// BOTON WPP GENERAL
function contactarWPP() {
    let mensaje = "Hola AndreitaP 💗 Quiero hacer un pedido";
    window.open(`https://wa.me/${numeroWPP}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// INICIAR
window.onload = () => {
    cargarProductos();
    cargarStreamings();
    cargarMetodos();
}