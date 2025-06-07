document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();

    // Simple email regex to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      console.log("Valid email entered:", email);
      window.location.href = "home.html";  // redirect to home page
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
