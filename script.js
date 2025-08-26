function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.querySelector(".toggle-btn");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}

// Certificates modal
var certModal = document.getElementById("certModal");
var certModalImg = document.getElementById("certModalImage");
var certCloseBtn = certModal.getElementsByClassName("close")[0];

// Open modal on certificate click
document.querySelectorAll(".clickable-cert").forEach((cert) => {
  cert.addEventListener("click", function () {
    certModal.style.display = "block";
    certModalImg.src = this.src;
  });
});

// Close modal when clicking X
certCloseBtn.onclick = function () {
  certModal.style.display = "none";
};

// Close modal when clicking outside the image
certModal.onclick = function (e) {
  if (e.target === certModal) {
    certModal.style.display = "none";
  }
};

// Mobile nav toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  // Change ☰ to ✖ when active
  menuToggle.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
});
