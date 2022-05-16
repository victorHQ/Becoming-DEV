//Captura evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  
  const maxWeight = 500;
  const maxHeight = 3; 
  
  const inputWeight = event.target.querySelector("#peso");
  const inputHeight = event.target.querySelector("#altura"); 

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  /* ===== Verificação =====*/
  if (!weight || weight > maxWeight) {
    modalOpen();
    setResult("Peso Inválido!", false);
    return;
  }

  if (!height || height > maxHeight) {
    modalOpen();
    setResult("Altura Inválida!", false);
    return;
  }

  //Calculo e nivel
  const imc = getImc(weight, height);
  const levelImc = getLevelImc(imc);

  //Resultado
  const msg = `Seu IMC é ${imc} (${levelImc}).`;

  modalOpen();
  setResult(msg, true);
});

function getImc(weight, height) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

function getLevelImc(imc) {
  const level = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade Grau 1",
    "Obesidade Grau 2",
    "Obesidade Grau 3",
  ];

  if (imc >= 39.9) return level[5];
  if (imc >= 34.9) return level[4];
  if (imc >= 29.9) return level[3];
  if (imc >= 24.9) return level[2];
  if (imc >= 18.5) return level[1];
  if (imc < 18.5) return level[0];
}

function setResult(msg, isValid) {
  const result = document.querySelector("#resultado");
  const modal = document.querySelector(".modal");
  result.innerHTML = "";

  if (isValid) {
    result.classList.remove("isNotValid");
    result.classList.add("isValid");
    modal.classList.remove("modalNotValid");
    modal.classList.add("modalValid");
  } else {
    result.classList.remove("isValid");
    result.classList.add("isNotValid");
    modal.classList.remove("modalValid");
    modal.classList.add("modalNotValid");
  }

  result.innerHTML = msg;

  modalCloseConfirm();
}

function showRange(bool) {
  const weightLabel = document.querySelector("#peso-label");
  let weight = document.querySelector("#peso");
  const heightLabel = document.querySelector("#altura-label");
  let height = document.querySelector("#altura");

  if (bool) weightLabel.innerHTML = `Peso: ${weight.value} kg`;
  else heightLabel.innerHTML = `Altura: ${height.value} m`;
}

function resetValues() {
  const weightLabel = document.querySelector("#peso-label");
  let weight = document.querySelector("#peso");
  const heightLabel = document.querySelector("#altura-label");
  let height = document.querySelector("#altura");

  weightLabel.innerHTML = `Peso: ${0} kg`;
  heightLabel.innerHTML = `Altura: ${0} m`;
  weight.value = 0;
  height.value = 0;
}
