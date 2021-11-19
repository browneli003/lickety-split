const Intern = require('../lib/Intern')

test('get school', () => {
    const intern = new Intern('Joe', 4, 'Blah@bleh.com', 'blah school');

    expect(intern.getSchool()).toBe('blah school');
})

test('get intern role', () => {
    const intern = new Intern('Joe', 4, 'Blah@bleh.com');

    expect(intern.getRole()).toBe('Intern');
})