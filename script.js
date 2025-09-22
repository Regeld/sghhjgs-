// Imágenes de flores y girasoles
const flowerImages = [
  "https://i.ibb.co/sHW4TjM/sunflower.png",
  "https://i.ibb.co/n7cPkR3/yellow-flower.png",
  "https://i.ibb.co/qCRdQG4/flower-1.png",
  "https://i.ibb.co/KhT2hvf/flower-2.png"
];

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  // Imagen aleatoria
  const img = flowerImages[Math.floor(Math.random() * flowerImages.length)];
  flower.style.backgroundImage = `url(${img})`;

  // Posición aleatoria
  flower.style.left = Math.random() * 100 + "vw";

  // Tamaño variable
  const size = Math.random() * (window.innerWidth < 600 ? 30 : 50) + 30;
  flower.style.width = size + "px";
  flower.style.height = size + "px";

  // Duración de caída
  const duration = 4 + Math.random() * 6;
  flower.style.animationDuration = duration + "s";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, duration * 1000);
}

// Ajustar frecuencia según pantalla
let intervalTime = window.innerWidth < 600 ? 600 : 350;
setInterval(createFlower, intervalTime);
