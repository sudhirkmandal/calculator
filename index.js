let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    handleInput(e.target.textContent, false);
  });
});

document.addEventListener("keydown", function (e) {
  let key = e.key;
  if (isValidKey(key)) {
    handleInput(key, true);
  }
});

function handleInput(input, isKeyboard) {
  if (input === "=" || (isKeyboard && input === "Enter")) {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else if (input === "AC") {
    currentInput = "";
  } else if (input === "C") {
    currentInput = currentInput.slice(0, -1);
  } else if (input === "Backspace") {
    currentInput = currentInput.slice(0, -1);
  } else {
    if (currentInput === "Enter") return;
    currentInput += input;
  }
  display.value = currentInput;
}

function isValidKey(key) {
  return /[0-9+\-*/.=]/.test(key) || key === "Enter" || key === "Backspace";
}
