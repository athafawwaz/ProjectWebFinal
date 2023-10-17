const showLoginFormButton = document.getElementById("btn-log-pop");
const loginForm = document.getElementById("login-con");
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector("#navbarSupportedContent");
const navbarItems = document.querySelectorAll(".nav-item");
const resPopBtn = document.getElementById("btn-res-pop");
const resForm = document.getElementById("reserve");
const myForm = document.getElementById("myForm");

showLoginFormButton.addEventListener("click", function () {
  if (loginForm.style.display === "block") {
    loginForm.style.display = "none";
    navbarCollapse.classList.remove("show");
  } else {
    loginForm.style.display = "block";
    navbarCollapse.classList.remove("show");
  }
});

window.addEventListener("click", function (event) {
  if (
    event.target !== showLoginFormButton &&
    !loginForm.contains(event.target)
  ) {
    loginForm.style.display = "none";
  }
});

//menutup navbar saat mengklik item
navbarItems.forEach((item) => {
  item.addEventListener("click", function () {
    navbarCollapse.classList.remove("show");
  });
});

//mmenutup navbar saat mengklik di luar navbar
document.addEventListener("click", function (event) {
  if (
    !navbarCollapse.contains(event.target) &&
    !navbarToggler.contains(event.target)
  ) {
    navbarCollapse.classList.remove("show");
  }
});

resPopBtn.addEventListener("click", function () {
  if (resForm.style.display === "block") {
    resForm.style.display = "none";
  } else {
    resForm.style.display = "block";
  }
});

window.addEventListener("click", function (event) {
  if (event.target !== resPopBtn && !resForm.contains(event.target)) {
    resForm.style.display = "none";
  }
});

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("message sent");
  this.reset();
});
