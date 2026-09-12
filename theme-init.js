var stored = localStorage.getItem("theme");
var html = document.documentElement;

html.classList.remove("light", "dark");

if (stored === "dark") {
  html.classList.add("dark");
} else if (stored === "light") {
  html.classList.add("light");
} else if (stored === "auto") {
  // No class: follow prefers-color-scheme through color-scheme/light-dark().
} else {
  html.classList.add("light");
}
