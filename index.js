const body = document.querySelector("body");
const button = document.querySelector("button");

function changeColor() {
  const colors = ["red", "blue", "green", "yellow", "#333"];
  let int = Math.floor(Math.random() * colors.length);
  return (body.style.backgroundColor = colors[int]);
}

button.addEventListener("click", changeColor);
