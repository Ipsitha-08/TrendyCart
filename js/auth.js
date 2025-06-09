document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  if (form) { // Only on login page
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();

      if(username) {
        // Simulate login by saving user to localStorage
        localStorage.setItem("user", username);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.removeItem("guestContinue");  // Remove guest flag on login
        window.location.href = "index.html";
      } else {
        alert("Please enter username.");
      }
    });
  }
});

// Function to check authentication (use in all pages except login)
function checkAuth() {
  const user = localStorage.getItem("user");
  const guestContinued = localStorage.getItem("guestContinue");

  // Allow access if user logged in or continuing as guest
  if (!user && guestContinued !== "true") {
    window.location.href = "login.html";
  }
}

// Logout function to clear login and guest flags
function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("guestContinue");
  window.location.href = "login.html";
}
