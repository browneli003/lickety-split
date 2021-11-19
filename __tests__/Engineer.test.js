const Engineer = require('../lib/Engineer')

test('get github', () => {
    const engineer = new Engineer('Joe', 4, 'Blah@bleh.com', 'blah');

    expect(engineer.getGithub()).toBe('blah');
})

test('get engineer role', () => {
    const engineer = new Engineer('Joe', 4, 'Blah@bleh.com');

    expect(engineer.getRole()).toBe('Engineer');
})