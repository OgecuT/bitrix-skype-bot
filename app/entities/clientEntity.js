class ClientEntity {
    constructor({skypeName, bitrixName, nameAlias, bitrixId}) {
        this.skypeName = skypeName;
        this.bitrixName = bitrixName;
        this.nameAlias = nameAlias;
        this.bitrixId = bitrixId;
    }
}

module.exports = ClientEntity;
