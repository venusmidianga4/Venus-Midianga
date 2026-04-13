let title = document.getElementById("title");
let button = document.getElementById("btn");

function changeContent() {
    title.textContent = "It worked!";
    title.style.color = "red";
}

button.addEventListener("click", changeContent);
