const darkModeBtn = document.querySelector('.dark-mode');
const audio = new Audio('/audio/click-21156.mp3');

function getCurrentTheme() {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  localStorage.getItem("myTheme.theme")
    ? (theme = localStorage.getItem("myTheme.theme"))
    : null;
  return theme;
}

function loadTheme(theme) {
  const root = document.querySelector(":root");
  if (theme === "dark") {
    darkModeBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
  root.setAttribute("color-scheme", `${theme}`);
}

darkModeBtn.addEventListener("click", () => {
  let theme = getCurrentTheme();
  if (theme === "light") {
    theme = "dark";
  } else {
    theme = "light";
  }
  audio.play();
  localStorage.setItem("myTheme.theme", `${theme}`);
  loadTheme(theme);
});

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});