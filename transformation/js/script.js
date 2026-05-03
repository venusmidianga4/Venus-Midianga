window.addEventListener("DOMContentLoaded", function () {

  let state = 0;

  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");

  document.body.addEventListener("click", function () {

    state++;

    const colors = ["black", "#111", "#222", "#300", "#003"];
    document.body.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    if (!title || !subtitle) return;

    if (state === 1) {
      title.textContent = "SIGNAL BROKEN";
      subtitle.textContent = "system unstable...";
    }

    else if (state === 2) {
      title.textContent = "GLITCH MODE";
      subtitle.textContent = "reality shifting...";
    }

    else {
      title.textContent = "CLICK ME";
      subtitle.textContent = "click anywhere";
      state = 0;
    }
  });

});
