const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const htmlTemplate = require('./src/pageTemplate');
const writeFile = require('./src/genHTML');

// Empty team array that will be populated and sent to the HTML template
let team = [];
team.manager = [];
team.engineer = [];
team.intern = [];

// Getting the Manager information
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter your managers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team managers ID number?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter team managers ID number!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter team managers email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Team managers office number?',
            validate: officeNumInput => {
                if(officeNumInput) {
                    return true;
                } else {
                    console.log('Please enter team managers email!')
                    return false;
                }
            }
        }
    ])
    .then(data => {
        // Manager information is passed into a Manager object
        this.manager = new Manager(data.name, data.id, data.email, data.officeNum);
        this.manager.getRole();

        // Manager object is pushed into the team array
        team.manager.push(this.manager);
        return team;
    })
};

// Getting team information
const promptTeam = teamData => {
    // Asking if they would like to add an Engineer, Intern, or be finished adding team members
    return inquirer.prompt(
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'teamAdd',
            choices: ['Add Engineer', 'Add Intern', 'Done']
        }
    )
    .then(({ teamAdd }) => {
        // Getting Engineer data
        if(teamAdd === 'Add Engineer') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your engineers name?',
                    validate: nameInput => {
                        if(nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your engineers name!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your engineers ID number?',
                    validate: idInput => {
                        if(idInput) {
                            return true;
                        } else {
                            console.log('Please enter your engineers ID number!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your engineers email?',
                    validate: emailInput => {
                        if(emailInput) {
                            return true;
                        } else {
                            console.log('Please enter your engineers email!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your engineers github username?',
                    validate: githubInput => {
                        if(githubInput) {
                            return true;
                        } else {
                            console.log('Please enter your engineers github username!')
                            return false;
                        }
                    }
                }
            ])
            .then((data) => {
                // Passing the Engineer data into a Engineer object
                this.engineer = new Engineer(data.name, data.id, data.email, data.github);
                this.engineer.getRole();

                // Pushing the Engineer object into the team array
                teamData.engineer.push(this.engineer);

                return promptTeam(teamData);
            })
        } else if (teamAdd === 'Add Intern') {
            // Getting intern data
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your interns name?',
                    validate: nameInput => {
                        if(nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your interns name!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your interns ID number?',
                    validate: idInput => {
                        if(idInput) {
                            return true;
                        } else {
                            console.log('Please enter your interns ID number!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your interns email?',
                    validate: emailInput => {
                        if(emailInput) {
                            return true;
                        } else {
                            console.log('Please enter your interns email!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is your interns school?',
                    validate: schoolInput => {
                        if(schoolInput) {
                            return true;
                        } else {
                            console.log('Please enter your interns school!')
                            return false;
                        }
                    }
                }
            ])
            .then((data) => {
                // Intern data is made into an Intern object
                this.intern = new Intern(data.name, data.id, data.email, data.school);
                this.intern.getRole();

                // Intern object is sent to team array
                teamData.intern.push(this.intern);

                return promptTeam(teamData);
            })
        } else if(teamAdd === 'Done') {
            // Taking the team array and passing it to the HTML Template
            return teamData;
        }
    })
};


// App starts by asking for Manager info, then getting the team data. 
// Team data is then sent to the HTML template to create cards for every
// team member. Once cards are created, the html is sent to the writeFile
// Function to create the HTML Index page.

promptManager()
.then(data => {
    return promptTeam(data)
    .then(data => {
        return htmlTemplate(data);
    })
    .then(data => {
        return writeFile(data);
    })
})
.catch(err => {
    console.log(err);
});