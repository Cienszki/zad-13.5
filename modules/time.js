function convertTime() {
	var hours = Math.floor(uptime / 3600),
		uptime = uptime % 3600,
		minutes = Math.floor(uptime / 60),
		seconds = uptime % 60;
		return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';
}
exports.print = convertTime;
