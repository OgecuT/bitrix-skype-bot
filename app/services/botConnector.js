const builder = require('botbuilder');

/**
 * @class BotConnector
 */
class BotConnector {
	constructor() {
		this._connector = null;

		this._init();
	}

	getConnector() {
		return this._connector;
	}

	_init() {
		this._connector = new builder.ChatConnector({
			appId: process.env.MICROSOFT_APP_ID,
			appPassword: process.env.MICROSOFT_APP_PASSWORD
		});
	}
}

module.exports = new BotConnector;