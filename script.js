// ⚠️ Mets ton mot de passe perso ici
const ADMIN_PASSWORD = "Fvfv324567._.";

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("admin-login-btn");
  const adminZone = document.getElementById("admin-zone");
  const passwordInput = document.getElementById("admin-password");
  const validateBtn = document.getElementById("admin-validate-btn");
  const saveBtn = document.getElementById("admin-save-btn");
  const lettreContenu = document.getElementById("lettre-contenu");

  const savedText = localStorage.getItem("lettre_motivation");
  if (savedText) {
    lettreContenu.innerHTML = savedText;
  }

  if (!loginBtn) return;

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
