let drop = document.getElementById("drop");
let button = document.getElementById("button");
let div = document.getElementById("resultado");
let taxa = parseFloat(2.07);

button.addEventListener("click", () => {
  switch (drop.value) {
    case "1":
      div.innerHTML += `O valor total é de R$ 1.117,20`;
      break;
    case "2":
      div.innerHTML += `O valor total é de R$ 1.254,00 `;

      break;
    case "3":
      div.innerHTML += `O valor total é de R$ 1.400,40`;
      break;
    case "4":
      div.innerHTML += `O valor total é de R$ 1.556,16 `;
      break;
    case "5":
      div.innerHTML += `O valor total é de R$ 2.234,52`;
      break;
    case "6":
      div.innerHTML += `O valor total é de R$ 2.507,76`;
      break;
    case "7":
      div.innerHTML += `O valor total é de R$ 2.800,44`;
      break;
    case "8":
      div.innerHTML += `O valor total é de R$ 3.112,32`;
      break;
    case "9":
      div.innerHTML += `O valor total é de R$ 5.586,24`;
      break;
    case "10":
      div.innerHTML += `O valor total é de R$ 6.269,52`;
      break;
    case "11":
      div.innerHTML += `O valor total é de R$ 7.001,64`;
      break;
    case "12":
      div.innerHTML += `O valor total é de R$ 7.780,80`;
      break;
    case "13":
      div.innerHTML += `O valor total é de R$ 11.172,48`;
      break;
    case "14":
      div.innerHTML += `O valor total é de R$ 12.539,04`;
      break;
    case "15":
      div.innerHTML += `O valor total é de R$ 14.002,92`;
      break;
    case "16":
      div.innerHTML += `O valor total é de R$ 15.561,12`;
      break;
    case "17":
      div.innerHTML += `O valor total é de R$ 22.344,96`;
      break;
    case "18":
      div.innerHTML += `O valor total é de R$ 25.078,08`;
      break;
    case "19":
      div.innerHTML += `O valor total é de R$ 28.005,84`;
      break;
    case "20":
      div.innerHTML += `O valor total é de R$ 31.122,72`;
      break;
  }
  
  div.innerHTML += ` e a taxa de juros aplicada no empréstimo é de ${taxa}%.`;
});
