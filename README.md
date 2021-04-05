# Team Profile Generator
 
[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-green.svg)](https://unlicense.org/)

## Description 
This command line application generates an HTML file based on user input. This is done using the ```inquirer``` npm package to create a form for the user to fill out, and then the user input is rendered to a newly created HTML file using JavaScript. Bootstrap and custom CSS are also used to add styling to the rendered page.

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation 
Before you can use the Team Profile generator, you will need to download the ```inquirer``` npm package. To do so, change directories in the command line interface to the 'team-profile-generator' folder. Then type ```npm i inquirer```. You should now be able to use this app. See the next section for usage instructions. 

## Usage 
To use this app, change directories in the command line interface to the 'team-profile-generator' folder. Then type ```node index.js``` and fill out the form submission. After completing the form, the generated my-team.html file is created in the 'dist/' folder. See the example file currently in the 'dist/' folder. (Note: running the application WILL overwrite this file. If you wish to keep it for reference, or if you intend to generate multiple profiles, you will need to manually change the name of the file after it has been generated.)

![team-profile-generator demo](./demo/team-profile-generator-demo.gif)

## Testing 
To run the tests included in this app, you will need to download the ```jest``` npm package. To do so, change directories in the command line to the 'team-profile-generator' folder. Then type ```npm i -D jest```. You should now be able to run the included tests by typing ```npm test``` in the command line interface.

## Credits 

### Number of contributers: 1
Ian Everitt


## Questions
Have questions? Email me at: [ian.andrew.everitt@gmail.com](mailto:ian.andrew.everitt@gmail.com).

You can also visit my GitHub profile: [Link to Ian Everitt's GitHub profile](https://github.com/rflctvEQ)


## License
[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-green.svg)](https://unlicense.org/)

[Unlicense link](https://unlicense.org/)

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>



This README was generated using [rflctvEQ's README-generator.](https://github.com/rflctvEQ/readme-generator) 