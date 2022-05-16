function viraDev() {
  let buttons = document.querySelectorAll("button");
  let spans = document.querySelectorAll("span");
  const devText = ["Eu", "Vou", "Virar", "Dev"];

  for (let index = 0; index < devText.length; index++) {
    buttons[index].addEventListener("click", () => {
      spans[index].innerHTML = `<u>${devText[index]}</u>`;
    });
  }
}

viraDev();
