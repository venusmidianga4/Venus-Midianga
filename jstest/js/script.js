// Variable
const button = document.getElementById("colorButton");
const title = document.getElementById("title");

// Function
function changePageColor() {
  document.body.style.backgroundColor = "lightpink";
  title.textContent = "The color changed!";
}

// Event Listener
button.addEventListener("click", changePageColor);
