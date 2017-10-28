const request = require('request');
const BitrixTaskEntity = require('./../entities/bitrixTaskEntity');

/**
 * @class BitrixTaskService
 */
class BitrixTaskService {
    constructor() {
		this.API = 'https://candevelop.bitrix24.ru/rest/6/5onkke3yd028k2te/task.item.add.json/';
    }

	/**
	 * @param {Object} taskData
	 * @param {ClientEntity} client
	 * @return {Promise}
	 */
	createTask(taskData, client) {
		const task = new BitrixTaskEntity(taskData);
		task.setResponsible(client.bitrixId);

		return this._saveTask({arNewTaskData: task})
    }

	/**
	 * @private
	 * @param {{arNewTaskData: BitrixTaskEntity}} data
	 * @return {Promise}
	 */
	_saveTask(data) {
		return new Promise((resolve, reject) => {
			request.post({url: this.API, form: data}, (err, httpResponse, body) => {
				if (err) {
					return reject(err);
				}

				return resolve(JSON.parse(body));
			})
		})
    }
}

module.exports = BitrixTaskService;
