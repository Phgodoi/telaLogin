let imagens = ["./assets/img/welcomeBoia.jpg", "./assets/img/welcomeDivers.jpg", "./assets/img/welcomeDoor.jpg", "./assets/img/welcomePlanta.jpg", "./assets/img/welcomePraia.jpg", "./assets/img/welcomeTrevo.jpg"];

let indice = Math.floor(Math.random() * imagens.length);
let imagem = document.getElementById("imagem");

function trocarImagem() {
  indice = (indice + 1) % imagens.length;
  imagem.style.backgroundImage = `url('${imagens[indice]}')`;
}

trocarImagem(); // altera a imagem de fundo no primeiro carregamento da página
setInterval(trocarImagem, 60000); // altera a imagem de fundo a cada 60 segundos