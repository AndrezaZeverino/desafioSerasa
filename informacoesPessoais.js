let button = document.getElementById("button");
let finalizado = document.getElementById("finalizado");
let meuCampoCPF = document.getElementById("meuCampoCPF");

button.addEventListener("click", () => {
  finalizado.innerHTML += `Parabéns, você finalizou seu empréstimo com a empresa CréditoParaTodxs, em até 4 horas o valor estará em sua conta`;
});


