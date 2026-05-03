let state = 0;

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

document.body.addEventListener("click", transform);

function transform() {

  state++;

  // SCREEN SHAKE
  document.body.classList.add("shake");
  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 200);

  // RANDOM GLITCH BACKGROUNDS
  const colors = ["#000", "#111", "#220000", "#001a1a", "#1a001a"];
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  // GLITCH TEXT STATES
  if (state === 1) {
    title.textContent = "SIGNAL CORRUPTED";
    subtitle.textContent = "data fracture detected";
  }

  else if (state === 2) {
    title.textContent = "MEMORY LEAK";
    subtitle.textContent = "identity unstable";
  }

  else if (state === 3) {
    title.textContent = "SYSTEM BREAKDOWN";
    subtitle.textContent = "reality is collapsing";
  }

  else {
    title.textContent = "CLICK TO STABILIZE";
    subtitle.textContent = "or let it break again";
    state = 0;
  }
}
setInterval(() => {
  document.body.click();
}, 2500);
