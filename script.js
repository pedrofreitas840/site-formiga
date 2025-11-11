document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("btnCuriosidade");
  const curiosidade = document.getElementById("curiosidade");

  const frases = [
    "Formiga foi a única jogadora a disputar sete Copas do Mundo e sete Olimpíadas.",
    "Ela começou a jogar bola ainda criança nas ruas de Salvador.",
    "Formiga é referência na luta contra o racismo e o machismo no esporte.",
    "Mesmo após os 40 anos, continuou atuando em alto nível internacional.",
    "É a jogadora mais velha a disputar uma partida olímpica de futebol."
  ];

  btn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * frases.length);
    curiosidade.textContent = frases[random];
    curiosidade.classList.toggle("hidden");
  });
});
