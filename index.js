const { Telegraf, Scenes, session } = require("telegraf");
const { BOT_TOKEN } = require("./config.json");
const bot = new Telegraf(BOT_TOKEN);
const path = require("path");

const registerCommands = require("./utils/registerCommands.js");
registerCommands(bot, path.resolve(__dirname, "commands"));

const { artistScene, clientScene } = require("./middleware/scenes.js").scenes;
const stage = new Scenes.Stage([artistScene, clientScene]);

bot.use(session()); // ALERT: Memory-based session middleware
bot.use(stage.middleware());

bot.launch();
