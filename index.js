const body = document.querySelector("body");
const button = document.querySelector("button");
const gradient = "linear-gradient";

function changeColor() {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "#333",
    "#051937",
    "#004d7a",
    "#008793",
    "#00bf72",
    "#a8eb12",
  ];
  let int = Math.floor(Math.random() * colors.length);

  console.log(int);
  body.style.backgroundRepeat = `no-repeat`;
  body.style.width = "100%";
  body.style.height = "100vh";
  return (body.style.backgroundImage = `${gradient}(to right top, ${
    colors[int]
  },${colors[int - 1]} )`);
}
console.log(changeColor());
button.addEventListener("click", changeColor);

// background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
