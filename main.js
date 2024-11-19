const text = document.createElement("h1");
const button = document.createElement("button");
document.body.appendChild(text);
document.body.appendChild(button);
text.innerHTML = "Hello, Zephyrus Engineering Limited";
button.innerHTML = "Click me";
let clicked = false;

const start = () => {
  if (clicked) {
    text.innerHTML = "Hello";
  } else {
    text.innerHTML = "My name is Christopher Browne";
  }
  clicked = !clicked;
};

const next = () => {
  text.innerHTML = "My name is Christopher Browne";
  setTimeout(() => {
    text.innerHTML = "thank you very much for the opportunity";
  }, 2500);
  setTimeout(() => {
    text.innerHTML =
      "I hope this is enough to convince you that I am right for the position";
  }, 4500);
  setTimeout(() => {
    text.innerHTML = "if not please keep my name in mind for future oppenings";
  }, 6500);
  setTimeout(() => {
    text.innerHTML = "have a great day😀😀😀😀";
  }, 8500);
};

button.addEventListener("click", next);
