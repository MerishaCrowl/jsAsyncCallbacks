const colors = ["default", "altColor", "anotherAltColor", "yetAnotherAltColor"];
let currentColorIndex = 0;

function toggleColor() {
  const button = document.getElementById("colorButton");
  const currentColor = colors[currentColorIndex];

  button.className = currentColor;

  const message = getMessage(currentColor);
  console.log(message);

  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

function getMessage(color) {
  if (color === "altColor") {
    return "I am blue.";
  } else if (color === "anotherAltColor") {
    return "I am red.";
  } else if (color === "yetAnotherAltColor") {
    return "I am purple.";
  } else {
    return "I am green.";
  }
}

const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", toggleColor);
