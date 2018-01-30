const builder = require('botbuilder');
const BotConnector = require('./botConnector');
const ClientService = require('./clientService');
const BitrixTaskService = require('./bitrixTaskService');

/**
 * @class BotService
 * @property builder.UniversalBot bot
 */
class BotService {
    constructor() {
    	this.clients = new ClientService();
    	this.bitrixTaskService = new BitrixTaskService();
	    this.bot = new builder.UniversalBot(BotConnector.getConnector());

	    this.bot.dialog('/', this.defaultHandler.bind(this));

	    this.bot
		    .dialog('#task', [this.taskStartHandler.bind(this), this.taskDescriptionHandler.bind(this)])
		    .triggerAction({ matches: /^#task/i });
    }

	/**
	 * @param {Session} session
	 */
    defaultHandler(session) {
		session.send('Сашка ты красавчик спору нет!!!');
		session.endDialog();
	}

	/**
	 * @param {Session} session
	 */
	taskStartHandler(session) {
		const request = this._prepareRequest(session.message.text);
		const client = this.clients.findAndGetClient(request.name);

		if (client !== undefined) {
			session.userData.task = request;
			session.userData.client = client;
			builder.Prompts.text(session, 'Set task description');
		} else {
			session.endDialog("USER NOT FOUND!");
		}
    }

	/**
	 * @param {Session} session
	 * @param {IDialogResult} results
	 */
	taskDescriptionHandler(session, results) {
		session.userData.task.description = results.response;

		this.bitrixTaskService
			.createTask(session.userData.task, session.userData.client)
			.then(res => {
				session.send('Created task id - %s', res.result);
				session.endDialog();
			})
			.catch(err => {
				console.log('err', err);
				session.endDialog();
			});
	}

	/**
	 * @param {string} str
	 * @return {{route: string, name: string, taskTitle: string}}
	 * @private
	 */
	_prepareRequest(str) {
		const res = str.split('#').filter(item => Boolean(item));

		return {
			route: res[0].trim(),
			name: res[1].trim() || null,
			taskTitle: res[2] !== undefined ? res[2].trim() : 'Task from bot:' + this._getTime()
		};
	}

	_getTime() {
		const d = new Date();
		return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
	}
}

module.exports = BotService;
