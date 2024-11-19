// create two new elements
const text = document.createElement("h1");
const button = document.createElement("button");
// add them to the body
document.body.appendChild(text);
document.body.appendChild(button);
// give them initial text
text.innerHTML = "Hello, Zephyrus Engineering Limited";
button.innerHTML = "Click me";
// a boolean to track if the button has been clicked for the basic version
let clicked = false;

const start = () => {
  // if clicked is true should display Hello
  // else my name is Christopher Browne
  // everytime its clicked we are changing the clicked value
  if (clicked) {
    text.innerHTML = "Hello";
  } else {
    text.innerHTML = "My name is Christopher Browne";
  }
  clicked = !clicked;
};

const next = () => {
  // slightly more advanced using timeout to change the text
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

// just replace the function for either one to work
button.addEventListener("click", next);
