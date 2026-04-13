// variable
const button = document.getElementById("btn");
const text = document.getElementById("text");

// function
function changeText() {
    text.textContent = "You clicked the button!";
    text.style.color = "blue";
}

// event listener
button.addEventListener("click", changeText);
