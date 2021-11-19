const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum;
    }

    getOfficeN() {
        return this.officeNum;
    }

    getRole() {
        return this.role = 'Manager';
    }
}

module.exports = Manager;