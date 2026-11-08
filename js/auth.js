document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("login-error");

  const ADMIN_USER = "admin";
  const ADMIN_PASS = "1234";

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (username === ADMIN_USER && password === ADMIN_PASS) {
        errorMessage.classList.add("hidden");
        setTimeout(() => {
          window.location.href = "./admin/dashboard.html";
        }, 500);
      } else {
        errorMessage.classList.remove("hidden");
        password.value = " ";
        passwordInput.focus();
      }
    });
  }
});
