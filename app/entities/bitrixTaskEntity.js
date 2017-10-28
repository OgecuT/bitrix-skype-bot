/**
 * @class BitrixTaskEntity
 */
class BitrixTaskEntity {
    constructor({taskTitle, description}) {
	    this.TITLE = taskTitle;
	    this.STAGE_ID = 0;
	    this.DESCRIPTION = description || '';
	    this.DEADLINE = '';
	    this.START_DATE_PLAN = '';
	    this.END_DATE_PLAN = '';
	    this.PRIORITY = 1;
	    this.ACCOMPLICES = [];
	    this.AUDITORS = [];
	    this.TAGS = [];
	    this.ALLOW_CHANGE_DEADLINE = 'N';
	    this.TASK_CONTROL = 'N';
	    this.PARENT_ID = null;
	    this.GROUP_ID = 40;
	    this.RESPONSIBLE_ID = 6;
	    this.TIME_ESTIMATE = 0;
	    this.CREATED_BY = 1;
	    this.DECLINE_REASON = null;
	    this.STATUS = 1;
	    this.DURATION_TYPE = 'days';
	    this.MARK = null;
	    this.ALLOW_TIME_TRACKING = 'Y';
	    this.MATCH_WORK_TIME = 'N';
	    this.ADD_IN_REPORT = 'N';
	    this.SITE_ID = 's1';
	    this.UF_CRM_TASK = [];
	    this.UF_TASK_WEBDAV_FILES = [];
    }

	/**
 	 * @param {number} num
	 * @return {BitrixTaskEntity}
	 */
	setResponsible(num) {
    	this.RESPONSIBLE_ID = num;

		return this;
    }

	/**
	 * @param {number} num
	 * @return {BitrixTaskEntity}
	 */
    setGroup(num) {
		this.GROUP_ID = num;

		return this;
    }
}

module.exports = BitrixTaskEntity;
