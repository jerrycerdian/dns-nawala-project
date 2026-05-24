require("dotenv").config();

const express = require("express");
const path = require("path");
const { createBot } = require("./bot");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.get("/dns", (req, res) => {
  res.json({
    name: "DNS Nawala",
    primary: "180.131.144.144",
    secondary: "180.131.145.145",
    description: "Layanan penyaring konten negatif di internet"
  });
});

createBot();

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});