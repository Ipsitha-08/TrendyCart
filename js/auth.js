document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();

    // Simulate login by saving user to localStorage
    localStorage.setItem("user", username);
    window.location.href = "index.html";
  });
});

// Function to check authentication (use in all pages except login)
function checkAuth() {
  const user = localStorage.getItem("user");
  if (!user) window.location.href = "login.html";
}
