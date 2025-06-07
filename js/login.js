document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (email && password) {
        localStorage.setItem("user", email);
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage
      } else {
        alert("Please enter valid credentials.");
      }
    });
  }
});

