// ⚠️ Mets ton mot de passe perso ici
const ADMIN_PASSWORD = "Fvfv324567._.";

document.addEventListener("DOMContentLoaded", () => {
  const adminZone = document.getElementById("admin-zone");
  const passwordInput = document.getElementById("admin-password");
  const validateBtn = document.getElementById("admin-validate-btn");
  const saveBtn = document.getElementById("admin-save-btn");
  const lettreContenu = document.getElementById("lettre-contenu");
  const loginBtn = document.getElementById("admin-login-btn");

  // Cache tout au démarrage
  if (loginBtn) loginBtn.style.display = "none";
  if (adminZone) adminZone.style.display = "none";

  // Charger la version sauvegardée si elle existe
  const savedText = localStorage.getItem("lettre_motivation");
  if (savedText) {
    lettreContenu.innerHTML = savedText;
  }

  // Afficher le bloc admin avec Ctrl + Shift + I
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
      if (adminZone) {
        adminZone.style.display = "block";
        adminZone.style.animation = "glowFlash 0.8s ease";
        alert("Mode admin activé.");
      }
    }
  });

  // Validation du mot de passe
  validateBtn.addEventListener("click", () => {
    if (passwordInput.value === ADMIN_PASSWORD) {
      lettreContenu.contentEditable = "true";
      saveBtn.style.display = "inline-block";
      alert("Mode édition activé.");
    } else {
      alert("Mot de passe incorrect.");
    }
  });

  // Sauvegarde du texte
  saveBtn.addEventListener("click", () => {
    localStorage.setItem("lettre_motivation", lettreContenu.innerHTML);
    alert("Lettre sauvegardée.");
  });
});
