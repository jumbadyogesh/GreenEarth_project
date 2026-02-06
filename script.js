// Login popup
const loginBtn = document.getElementById("desktop-login");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// Open popup
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "flex";
}); 

// Close popup (X button)
closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login submitted!");
    overlay.style.display = "none";
});


// register popup
  const registerBtn = document.getElementById("registerBtn");
  const regOverlay = document.getElementById("regOverlay");
  const closeReg = document.getElementById("closeReg");

  // Open popup
  registerBtn.addEventListener("click", () => {
    regOverlay.style.display = "flex";
  });

  // Close popup
  closeReg.addEventListener("click", () => {
    regOverlay.style.display = "none";
  });

  // Close when clicking outside
  regOverlay.addEventListener("click", (e) => {
    if (e.target === regOverlay) {
      regOverlay.style.display = "none";
    }
  });