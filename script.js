// ⚠️ C’est ici que tu mettras TON mot de passe perso
const ADMIN_PASSWORD = "Fvfv324567._.";

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("admin-login-btn");
  const adminZone = document.getElementById("admin-zone");
  const passwordInput = document.getElementById("admin-password");
  const validateBtn = document.getElementById("admin-validate-btn");
  const saveBtn = document.getElementById("admin-save-btn");
  const lettreContenu = document.getElementById("lettre-contenu");

  // Charger la version sauvegardée si elle existe
  const savedText = localStorage.getItem("lettre_motivation");
  if (savedText) {
    lettreContenu.innerHTML = savedText;
  }

  if (!loginBtn) return; // si on n’est pas sur lettre.html, on ne fait rien

  loginBtn.addEventListener("click", () => {
    adminZone.style.display = "block";
  });

  validateBtn.addEventListener("click", () => {
    if (passwordInput.value === ADMIN_PASSWORD) {
      lettreContenu.contentEditable = "true";
      saveBtn.style.display = "inline-block";
      alert("Mode édition activé.");
    } else {
      alert("Mot de passe incorrect.");
    }
  });

  saveBtn.addEventListener("click", () => {
    localStorage.setItem("lettre_motivation", lettreContenu.innerHTML);
    alert("Lettre sauvegardée.");
  });
});
.admin-link {
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  color: #00ffff;
  font-size: 14px;
  opacity: 0.3;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.admin-link:hover {
  opacity: 1;
  text-shadow: 0 0 8px #00ffff;
}

