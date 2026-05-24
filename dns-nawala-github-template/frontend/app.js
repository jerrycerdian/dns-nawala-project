const statusText = document.getElementById("statusText");
const loadStatus = document.getElementById("loadStatus");

loadStatus.addEventListener("click", async () => {
  statusText.textContent = "Memeriksa backend...";
  try {
    const res = await fetch("http://localhost:3000/health");
    const data = await res.json();
    statusText.textContent = `Backend aktif: ${data.status}`;
  } catch (err) {
    statusText.textContent = "Backend belum terhubung atau sedang offline.";
  }
});