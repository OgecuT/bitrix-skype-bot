const builder = require('botbuilder');
const BotConnector = require('./botConnector');

/**
 * @class BotService
 * @property builder.UniversalBot bot
 */
class BotService {
    constructor() {
	    this.bot = new builder.UniversalBot(BotConnector.getConnector());

	    this.bot
		    .dialog('/', this.defaultHandler);

	    this.bot
		    .dialog('#task', [this.taskStartHandler, this.taskDescriptionHandler])
		    .triggerAction({ matches: /^#task/i });

	    this.defaultHandler = this.defaultHandler.bind(this);
	    this.taskStartHandler = this.taskStartHandler.bind(this);
	    this.taskDescriptionHandler = this.taskDescriptionHandler.bind(this);
    }

	/**
	 * @param {Session} session
	 */
    defaultHandler(session) {}

	/**
	 * @param {Session} session
	 */
	taskStartHandler(session) {
		// console.log(session.message.user.name);
		console.log(session.message.text);
		console.log(session.message);

		builder.Prompts.text(session, 'Hi! What is your name?');
	    // session.endDialog("It's %s. YOU WIN!", session.message.text);
    }

	/**
	 * @param {Session} session
	 * @param results
	 */
	taskDescriptionHandler(session, results) {
		console.log('!!!!!!!!!!!!!!!!!!', results);
		session.endDialogWithResult(results);
	}

}

module.exports = BotService;
