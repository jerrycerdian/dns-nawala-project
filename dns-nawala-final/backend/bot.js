const { Telegraf } = require("telegraf");

function createBot() {
  const token = process.env.BOT_TOKEN;
  if (!token) {
    console.error("BOT_TOKEN belum diisi di file .env");
    return null;
  }

  const bot = new Telegraf(token);

  bot.start((ctx) => {
    ctx.reply(
      "Selamat datang di Bot DNS Nawala.\n\n" +
      "Perintah:\n" +
      "/help - bantuan\n" +
      "/info - info DNS Nawala\n" +
      "/dns - alamat DNS"
    );
  });

  bot.help((ctx) => {
    ctx.reply("Menu tersedia:\n/start\n/help\n/info\n/dns");
  });

  bot.command("info", (ctx) => {
    ctx.reply(
      "DNS Nawala adalah layanan penyaring konten negatif seperti pornografi, judi online, situs penipuan, phishing, dan malware.\n\n" +
      "Primary: 180.131.144.144\nSecondary: 180.131.145.145"
    );
  });

  bot.command("dns", (ctx) => {
    ctx.reply("Primary DNS: 180.131.144.144\nSecondary DNS: 180.131.145.145");
  });

  bot.on("text", (ctx) => {
    ctx.reply("Gunakan /help untuk melihat menu.");
  });

  bot.catch((err) => {
    console.error("Telegram bot error:", err);
  });

  bot.launch();
  console.log("Telegram bot aktif.");

  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
  return bot;
}

module.exports = { createBot };