function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.querySelector(".toggle-btn");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}
