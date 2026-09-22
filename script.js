const ADMIN_PASSWORD = "JeSuIsL'aDmIn1234";

document.addEventListener("DOMContentLoaded", () => {
  const adminZone = document.getElementById("admin-zone");
  const passwordInput = document.getElementById("admin-password");
  const validateBtn = document.getElementById("admin-validate-btn");
  const saveBtn = document.getElementById("admin-save-btn");
  const lettreContenu = document.getElementById("lettre-contenu");
  const loginBtn = document.getElementById("admin-login-btn");


  if (loginBtn) loginBtn.style.display = "none";
  if (adminZone) adminZone.style.display = "none";

 
  const savedText = localStorage.getItem("lettre_motivation");
  if (savedText) {
    lettreContenu.innerHTML = savedText;
  }

 
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
      if (adminZone) {
        adminZone.style.display = "block";
        adminZone.style.animation = "glowFlash 0.8s ease";
        alert("Mode admin activé.");
      }
    }
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
