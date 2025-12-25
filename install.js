let deferredPrompt = null;

function $(id){ return document.getElementById(id); }

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const btn = $("installBtn");
  if (btn) btn.style.display = "flex";
});

window.addEventListener("appinstalled", () => {
  deferredPrompt = null;
  const btn = document.getElementById("installBtn");
  if (btn) btn.style.display = "none";
});

window.installPWA = async function(){
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  const btn = document.getElementById("installBtn");
  if (btn) btn.style.display = "none";
};
