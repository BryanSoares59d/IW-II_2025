// Seleciona os elementos
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const status = document.getElementById("status");

// Funções para ligar e desligar a lâmpada
function ligarLampada() {
 lampada.src = "img2/lampada-ligada.png";
 lampada.alt = "Lâmpada Ligada";
 status.innerText = "A lâmpada está ligada.";
}
function desligarLampada() {
 lampada.src = "img2/lampada-desligada.png";
 lampada.alt = "Lâmpada Desligada";
 status.innerText = "A lâmpada está desligada.";
}

// Adiciona os eventos aos botões
btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada)

// Quando o ponteiro entra sobre a imagem, liga
lampada.addEventListener("mouseover", ligarLampada); 
// Quando o ponteiro sai da imagem, desliga
lampada.addEventListener("mouseout", desligarLampada); 

lampada.addEventListener("dblclick", () => {
    // Alterna o estado atual
    if (lampada.src.includes("ligada")) desligarLampada();
    else ligarLampada();
  });
