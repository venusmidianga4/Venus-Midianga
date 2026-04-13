let button = document.getElementById("transformBtn");
let body = document.body;
let title = document.getElementById("title");
let description = document.getElementById("description");

button.addEventListener("click", function() {

    body.classList.toggle("chaos");

    if (body.classList.contains("chaos")) {
        title.textContent = "This is the REAL me 😈";
        description.textContent = "Loud. Emotional. Unfiltered.";
        button.textContent = "Go Back to Professional";
    } else {
        title.textContent = "Welcome to My Portfolio";
        description.textContent = "Clean. Professional. Controlled.";
        button.textContent = "Reveal True Identity";
    }

});
