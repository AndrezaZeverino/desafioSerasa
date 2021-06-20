let button = document.getElementById("button");
let finalizado = document.getElementById("finalizado");
let meuCampoCPF = document.getElementById("meuCampoCPF");

button.addEventListener("click", () => {
  finalizado.innerHTML += `Parabéns, você finalizou seu empréstimo com a empresa CréditoParaTodxs, em até 4 horas o valor estará em sua conta`;
});

$(document).ready(function () {
  let meuCampoCPF = "#CPF";
  meuCampoCPF.mask("000.000.000-00", { reverse: true });
});
