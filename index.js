const { Telegraf, Markup } = require("telegraf");
const bot = new Telegraf("5440904369:AAHxj0h8VZKxXIucxcOkfBE_o4oJ8y8dzXo");

bot.command("custom", async (ctx) => {
  return await ctx.reply(
    "Custom buttons keyboard",
    Markup.keyboard([
      ["🔍 Search", "😎 Popular"], // Row1 with 2 buttons
      ["☸ Setting", "📞 Feedback"], // Row2 with 2 buttons
      ["📢 Ads", "⭐️ Rate us", "👥 Share"], // Row3 with 3 buttons
    ])
      .oneTime()
      .resize()
  );
});

bot.hears("🔍 Search", async (ctx) => {
  return await ctx.reply(
    "Custom buttons keyboard",
    Markup.keyboard([
      ["😎 Popular"], // Row1 with 2 buttons
      ["☸ Setting", "📞 Feedback"], // Row2 with 2 buttons
      ["⭐️ Rate us", "👥 Share"], // Row3 with 3 buttons
    ])
      .oneTime()
      .resize()
  );
});
bot.hears("📢 Ads", (ctx) => ctx.reply("Free hugs. Call now!"));

bot.command("oldschool", (ctx) => ctx.reply("Hello"));
bot.command("modern", ({ reply }) => reply("Yo"));
bot.command("hipster", Telegraf.reply("λ"));
bot.launch();
