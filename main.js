const text = document.createElement("h1");
const button = document.createElement("button");
document.body.appendChild(text);
document.body.appendChild(button);
text.innerHTML = "Hello";
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

button.addEventListener("click", start);
