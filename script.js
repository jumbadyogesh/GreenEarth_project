
const menuToggle = document.getElementById('menu-toggle');

// Close mobile menu when any nav/menu link is clicked
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (menuToggle) menuToggle.checked = false;
  });
});

// LOGIN: support both desktop and mobile links (elements have class "login")
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
document.querySelectorAll('.login').forEach(btn => {
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (overlay) overlay.style.display = 'flex';
    if (menuToggle) menuToggle.checked = false; // close menu on mobile
  });
});

// Close login popup
if (closeBtn) closeBtn.addEventListener('click', () => { if (overlay) overlay.style.display = 'none'; });

// Close login when clicking outside the popup box
if (overlay) {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.style.display = 'none';
    
  });
}

// Handle login form submit (placeholder behavior)
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login successful ✅');
    if (overlay) overlay.style.display = 'none';
     document.body.classList.remove("no-scroll");
  });
}

// REGISTER: support both desktop and mobile links (elements have class "register")
const regOverlay = document.getElementById('regOverlay');
const closeReg = document.getElementById('closeReg');
document.querySelectorAll('.register').forEach(btn => {
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (regOverlay) regOverlay.style.display = 'flex';
    if (menuToggle) menuToggle.checked = false; // close menu on mobile
  });
});

if (closeReg) closeReg.addEventListener('click', () => { if (regOverlay) regOverlay.style.display = 'none'; });

if (regOverlay) {
  regOverlay.addEventListener('click', (e) => {
    if (e.target === regOverlay) regOverlay.style.display = 'none';
  });
  // prevent submitting to a server; provide a simple confirmation
  const regForm = regOverlay.querySelector('form');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Account created successfully ✅');
      regOverlay.style.display = 'none';
    });
  }
}
