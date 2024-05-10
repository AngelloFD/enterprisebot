/**
 * @param {import("telegraf").Context} ctx
 */
module.exports = (ctx) => {
	ctx.reply(`Welcome, ${ctx.message.from.username}!`);
	ctx.reply("Are you an Artist or a Client?", {
		reply_markup: {
			keyboard: [["Artist", "Client"]],
			resize_keyboard: true,
			one_time_keyboard: true,
		},
	});
};
