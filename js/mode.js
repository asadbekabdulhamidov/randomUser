const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

let localMode = localStorage.getItem("mode");

if (localMode) {
  body.classList.add("dark-mode");
  lightBtn.classList.toggle("hidden");
  darkBtn.classList.toggle("hidden");
}
// toggele mode

const toggleMode = () => {
  lightBtn.classList.toggle("hidden");
  darkBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};

darkBtn.addEventListener("click", () => {
  toggleMode();
  localStorage.setItem("mode", "dark-mode");
});

lightBtn.addEventListener("click", () => {
  toggleMode();
  localStorage.setItem("mode", "");
});
