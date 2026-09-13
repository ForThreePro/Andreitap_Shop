// Datos para llenar automático
const streamings = [
    {titulo: "🎬 DISNEY+", items: ["Completa 1M con panel: $75", "Perfil 1 Mes: $20", "Completa 1M sin panel: $65"]},
    {titulo: "📺 PRIME VIDEO", items: ["Perfil 1 Mes: $18", "Completa 1 Mes: $45"]},
    {titulo: "🍿 NETFLIX", items: ["Perfil: $55", "Completa: $240"]},
    {titulo: "📡 PARAMOUNT", items: ["Perfil 1 Mes: $15", "Completa 1 Mes: $50"]},
    {titulo: "📌 HBO MAX + HULU", items: ["Perfil 1 Mes: $18", "Completa: $50"]},
    {titulo: "🎞️ VIX PREMIUM", items: ["Perfil 1 Mes: $10", "Completa: $25"]},
    {titulo: "🔞 PORNHUB", items: ["Perfil: $25", "Completa: $55"]},
    {titulo: "📡 IPTV", items: ["Perfil 1 Mes: $25", "Completa 1 Mes: $55"]},
    {titulo: "🎥 MUBI", items: ["1 Unidad: $30"]},
    {titulo: "🦉 DUOLINGO", items: ["Individual: $40"]},
    {titulo: "🎨 CANVA PRO", items: ["Invitación 1 Mes: $20"]},
    {titulo: "🎵 SPOTIFY PREMIUM", items: ["3 Meses: $95"]}
];

const metodos = ["Nequi", "Bancolombia", "Transferencia MX", "Diamantes", "Yape", "Prex", "Global"];

// Cargar streamings
const grid = document.getElementById('streamGrid');
streamings.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${s.titulo}</h3>${s.items.join('<br>')}`;
    grid.appendChild(card);
});

// Cargar métodos de pago
const metodosDiv = document.getElementById('metodosPago');
metodos.forEach(m => {
    const span = document.createElement('span');
    span.className = 'metodo';
    span.textContent = m;
    metodosDiv.appendChild(span);
});

// Botón WhatsApp
function contactarWPP() {
    let numero = "573215829404"; // CAMBIA POR TU NUMERO
    let mensaje = "Hola AndreitaP 💗 Quiero hacer un pedido";
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

console.log("✨ AndreitaP Ventas cargada correctamente");