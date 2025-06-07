document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Simulate successful login (no real authentication)
    if (email && password) {
      localStorage.setItem("user", email);
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to homepage
    } else {
      alert("Please enter valid credentials.");
    }
  });
  
