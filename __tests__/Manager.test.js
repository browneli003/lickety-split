const Manager = require('../lib/Manager.js');

test('Testing to get manger role', () => {
    const manager = new Manager('Joe', 4, 'Blah@bleh.com', 213);
    
    expect(manager.getRole()).toBe('Manager');
});

test('getting manager office number', () => {
    const manager = new Manager('Joe', 4, 'Blah@bleh.com', 213);

    expect(manager.getOfficeN()).toBe(213);
});