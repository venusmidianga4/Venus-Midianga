// Variables
let message = document.getElementById("message");
let button = document.getElementById("btn");

// Function
function changeMessage() {
    message.textContent = "You clicked the button!";
    message.style.color = "green";
}

// Another function (for key press)
function keyPressed(event) {
    message.textContent = "You pressed: " + event.key;
    message.style.color = "blue";
}

// Event Listeners
button.addEventListener("click", changeMessage);
document.addEventListener("keydown", keyPressed);
