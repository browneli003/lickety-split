const Employee = require('../lib/Employee.js');

test('create a employee object', () => {
    const employee = new Employee('John', 9, 'blah@bleh.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toContain('@');
});

test('getName to return name', () => {
    const employee = new Employee('john', 9, 'blah@bleh.com');

    expect(employee.getName()).toBe('john');
});

test('getId to return ID Number', () => {
    const employee = new Employee('john', 9, 'blah@bleh.com');

    expect(employee.getId()).toEqual(9);
});

test('getEmail to return Email', () => {
    const employee = new Employee('john', 9, 'blah@bleh.com');

    expect(employee.getEmail()).toBe('blah@bleh.com');
});

test('getRole to return employee', () => {
    const employee = new Employee('john', 9, 'blah@bleh.com');

    expect(employee.getRole()).toBe('Employee');
});