const { WizardScene } = require("telegraf/scenes");

module.exports = new WizardScene("artist", (ctx) => {
	ctx.reply("Welcome, Artist!");
	return ctx.scene.leave();
});
