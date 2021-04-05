// function that will generate all html elements specific to user's responses to inquirer questions
const generateTeamMembers = function(teamList) {
    // console.log(teamList);
    const generateManager = function(manager) {
        // console.log(manager);
        return `<div class="card col-12 employeeCard">
    <div class="card-header">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>                        
    </div>
</div>
`
    }

    const generateEngineer = function(engineer) {
        // console.log(engineer);
        return `<div class="card col-sm-12 col-lg-4 employeeCard">
    <div class="card-header">
        <h2>${engineer.getName()}</h2>
        <h3>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
            </ul>                        
    </div>
</div>
`
    }

    const generateIntern = function(intern) {
        // console.log(intern);
        return `<div class="card col-sm-12 col-lg-4 employeeCard">
    <div class="card-header">
        <h2>${intern.getName()}</h2>
        <h3>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>                        
    </div>
</div>
`
    }

    const renderedHtml = []; 

    teamList.forEach(employee => {
        // console.log(employee);
        switch (employee.getRole()) {
            case 'Manager':
                renderedHtml.push(generateManager(employee));
                break;
            case 'Engineer':
                renderedHtml.push(generateEngineer(employee));
                break;
            case 'Intern':
                renderedHtml.push(generateIntern(employee));
                break;
        }
    });

    return renderedHtml.join('');
}

// exports html content that will be used to write a new html file 
module.exports = (teamMembers) => {
return `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <link href="./style.css" rel="stylesheet">
    <title>My Team</title>
  </head>
  <body>
    <header>
        <h1 class="p-5 text-align-center"><span class="my">My</span> <span class="team">Team</span></h1>
    </header>
    <main class='container'>
        <div class="row">
            <div class="col-12 row">
                ${generateTeamMembers(teamMembers)}
            </div>
        </div>
    </main>
  </body>
</html>`;
};