const fs = require("fs");
const path = require("path");

function* readAllJsFiles(dir) {
	const files = fs.readdirSync(dir, { withFileTypes: true });

	for (const file of files) {
		const relativePath = path.join(dir, file.name);
		if (file.isDirectory()) {
			yield* readAllJsFiles(relativePath);
		} else if (file.name.endsWith(".js")) {
			yield relativePath;
		}
	}
}

module.exports = (bot, dirPath) => {
	for (const filePath of readAllJsFiles(dirPath)) {
		const command = path.basename(filePath, ".js");
		const commandHandler = require(filePath);
		bot.command(command, commandHandler);
	}
};
