// Efecto de corazones cayendo al cargar
document.addEventListener("DOMContentLoaded", () => {
  for(let i=0; i<15; i++){
    let heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.style.position = "fixed";
    heart.style.top = "-20px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "20px";
    heart.style.animation = `fall ${3 + Math.random()*3}s linear infinite`;
    heart.style.opacity = "0.6";
    document.body.appendChild(heart);
  }
});

// Animación CSS para que caigan
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh) rotate(360deg); opacity: 0; }
}
`;
document.head.appendChild(style);