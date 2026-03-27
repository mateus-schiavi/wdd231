document.addEventListener("DOMContentLoaded", () => {
  const timestamp = document.getElementById("timestamp");
  if (timestamp) {
    timestamp.value = new Date().toISOString();
  }

  // Open modals
  document.querySelectorAll("[data-modal]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById(link.dataset.modal).showModal();
    });
  });

  // Close modals
  document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest("dialog").close();
    });
  });

  // ✅ FIX: Last modified date
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = document.lastModified;
  }
});