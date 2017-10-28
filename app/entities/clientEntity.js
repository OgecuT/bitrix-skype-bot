/**
 * @class ClientEntity
 */
class ClientEntity {
    constructor({skypeName, bitrixName, nameAlias, bitrixId}) {
        this.skypeName = skypeName;
        this.bitrixName = bitrixName;
        this.nameAlias = nameAlias;
        this.bitrixId = bitrixId;
    }

	/**
	 * @param {string} name
	 */
	isEqual(name) {
		return this.nameAlias === name;
    }
}

module.exports = ClientEntity;
