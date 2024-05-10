const { WizardScene } = require("telegraf/scenes");

module.exports = new WizardScene("client", (ctx) => {
	ctx.reply("Welcome, Client!");
	return ctx.scene.leave();
});
