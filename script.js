function artistClick(name) {
  alert("You clicked " + name + " 🎵");
}
const loginBtn = document.querySelector(".btnLogin");
const loginBox = document.querySelector(".login-box");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", () => {
  loginBox.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  loginBox.classList.remove("active");
});