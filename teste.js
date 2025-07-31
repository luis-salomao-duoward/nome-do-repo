// Create floating particles
function createParticles() {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDuration = 3 + Math.random() * 4 + "s";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animation = `float ${
      3 + Math.random() * 4
    }s ease-in-out infinite`;
    document.body.appendChild(particle);
  }
}

// Password toggle functionality
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eyeIcon");

togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  eyeIcon.innerHTML =
    type === "text"
      ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>`
      : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>`;
});

// Form submission
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const buttonText = document.getElementById("buttonText");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  loginButton.disabled = true;
  buttonText.innerHTML = '<span class="loading-spinner"></span>Signing in...';

  setTimeout(() => {
    loginButton.disabled = false;
    buttonText.textContent = "Log in";
    alert("Login simulation complete!");
  }, 2000);
});

// Init particles
document.addEventListener("DOMContentLoaded", createParticles);
