document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters.");
    }

    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email (must contain '@' and '.').");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    feedbackDiv.style.display = "block";

if (isValid) {
  feedbackDiv.textContent = "Registration successful!";
  feedbackDiv.style.color = "#28a745"; // green text
  feedbackDiv.style.backgroundColor = "#d4edda"; // ✅ add light green background
} else {
  feedbackDiv.innerHTML = messages.join("<br>");
  feedbackDiv.style.color = "#dc3545"; // red text
  feedbackDiv.style.backgroundColor = "#f8d7da"; // ✅ add light red background
}
 });
});