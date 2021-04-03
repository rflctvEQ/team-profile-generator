const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const html = require('./src/template');

const teamArray = [];

const managerQuestions = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s employee ID?',
        name: 'managerId'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email address?',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'managerOffice'
    }
];

const addEmployeeQuestion = [
    {
        type: 'list',
        message: 'Would you like to add another employee?',
        choices: ['Engineer', 'Intern', 'Finish building my team'],
        name: 'addEmployee'
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the name of this engineer?',
        name: 'engineerName'
    },
    {
        type: 'input',
        message: 'What is this engineer\'s employee ID?',
        name: 'engineerId'
    },
    {
        type: 'input',
        message: 'What is this engineer\'s email address?',
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'What is this engineer\'s GitHub usernmae?',
        name: 'engineerGithub'
    }
];

const internQuestions = [
    {
        type: 'input', 
        message: 'What is the name of this intern?',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'What is this intern\'s employee ID?',
        name: 'internId'
    },
    {
        type: 'input',
        message: 'What is this intern\'s email address?',
        name: 'internEmail'
    },
    {
        type: 'input',
        message: 'What school does this intern attend?',
        name: 'internSchool'
    }
];



// function to initialize app 
const startManagerQs = function() {
    inquirer.prompt(managerQuestions)
        .then((data) => {
            const name = data.managerName;
            const id = data.managerId;
            const email = data.managerEmail;
            const officeNumber = data.managerOffice;
            teamArray.push(new Manager(name, id, email, officeNumber));
        })
        .catch((err) => console.log(err))
        .then((data) => {
            startAddEmployeeQ(data)
        });
}

startManagerQs();

const startAddEmployeeQ = function() {
    inquirer.prompt(addEmployeeQuestion)
        .then((data) => {
            if (data.addEmployee == 'Engineer') {
                inquirer.prompt(engineerQuestions)
                    .then((data) => {
                        const name = data.engineerName;
                        const id = data.engineerId;
                        const email = data.engineerEmail;
                        const github = data.engineerGithub;
                        teamArray.push(new Engineer(name, id, email, github));

                        // console.log(data);
                    })
                    .then((data) => {
                        startAddEmployeeQ(data);
                    })
                    .catch((err) => console.log(err));
            } else if (data.addEmployee == 'Intern') {
                inquirer.prompt(internQuestions)
                    .then((data) => {
                        const name = data.internName;
                        const id = data.internId;
                        const email = data.internEmail;
                        const school = data.internSchool;
                        teamArray.push(new Intern(name, id, email, school));
                        // console.log(data);
                    })
                    .then((data) => {
                        startAddEmployeeQ(data);
                    })
                    .catch((err) => console.log(err));
            } else {
                console.log(html(teamArray));
            }
        })
        .catch((err) => console.log(err));
}

