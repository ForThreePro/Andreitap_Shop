const precios = {
  simple: [
    {cant: 1, MX: "$20", CO: "$5.500", PE: "$3.00", DI: "100 💎"},
    {cant: 3, MX: "$50", CO: "$13.500", PE: "$10.00", DI: "300 💎"},
    {cant: 5, MX: "$85", CO: "$18.500", PE: "$17.00", DI: "400 💎"}
  ],
  objeto: [
    {cant: 1, MX: "$30", CO: "$7.500", PE: "$10.00", DI: "200 💎"},
    {cant: 3, MX: "$80", CO: "$16.500", PE: "$16.00", DI: "400 💎"},
    {cant: 5, MX: "$130", CO: "$26.500", PE: "$26.00", DI: "700 💎"}
  ],
  tematico: [
    {cant: 1, MX: "$40", CO: "$9.000", PE: "$8.00", DI: "200 💎"},
    {cant: 3, MX: "$100", CO: "$24.500", PE: "$20.00", DI: "500 💎"},
    {cant: 5, MX: "$170", CO: "$33.500", PE: "$34.00", DI: "800 💎"}
  ],
  botsMensual: [
    {cant: 1, MX: "$40", CO: "$8.500", PE: "$8.00", DI: "200 💎"},
    {cant: 2, MX: "$70", CO: "$14.500", PE: "$14.00", DI: "500 💎"},
    {cant: 3, MX: "$100", CO: "$25.000", PE: "$21.00", DI: "700 💎"}
  ],
  botsPerma: [
    {cant: 1, MX: "$100", CO: "$25.000", PE: "$21.00", DI: "600 💎"},
    {cant: 2, MX: "$180", CO: "$34.500", PE: "$36.00", DI: "1.000 💎"},
    {cant: 3, MX: "$260", CO: "$49.500", PE: "$52.00", DI: "2.000 💎"}
  ]
};

const pagosPorPais = {
  MX: ["Transferencia MX", "Diamantes"],
  CO: ["Nequi", "Bancolombia", "Diamantes"],
  PE: ["Yape", "PrexPex", "Diamantes"],
  DI: ["Diamantes"]
};

const banderas = {
  MX: "🇲🇽",
  CO: "🇨🇴",
  PE: "🇵🇪",
  DI: "💎"
};

function renderPrecios(pais) {
  renderSeccion("simple", precios.simple, pais);
  renderSeccion("objeto", precios.objeto, pais);
  renderSeccion("tematico", precios.tematico, pais);
  renderSeccion("bots-mensual", precios.botsMensual, pais);
  renderSeccion("bots-perma", precios.botsPerma, pais);

  const pagosDiv = document.getElementById("pagos");
  pagosDiv.innerHTML = "";
  pagosPorPais[pais].forEach(metodo => {
    pagosDiv.innerHTML += `<span>${metodo}</span>`;
  });

  document.getElementById("flagTitle").textContent = banderas[pais];
}

function renderSeccion(id, data, pais) {
  const div = document.getElementById(id);
  div.innerHTML = "";
  data.forEach(item => {
    div.innerHTML += `
      <div class="precio-card">
        <b>${item.cant}</b> por ${item[pais]}
        <a href="https://wa.me/573215829404" class="btn-whatsapp" target="_blank">Pedir por WhatsApp</a>
      </div>
    `;
  });
}

// Iniciar
document.addEventListener("DOMContentLoaded", () => {
  renderPrecios("MX");
  document.getElementById("countrySelect").addEventListener("change", (e) => {
    renderPrecios(e.target.value);
  });

  // Corazones cayendo
  for(let i=0; i<15; i++){
    let heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.style.position = "fixed";
    heart.style.top = "-20px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "20px";
    heart.style.animation = `fall ${3 + Math.random()*3}s linear infinite`;
    heart.style.opacity = "0.6";
    heart.style.zIndex = "-1";
    document.body.appendChild(heart);
  }
});

// Animación CSS
const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(110vh) rotate(360deg); opacity: 0; }`;
document.head.appendChild(style);