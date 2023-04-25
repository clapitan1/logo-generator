const { generateLogo, SHAPES } = require('../logogenerator');
const inquirer = require('inquirer');

const prompts = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (input) => input.length > 0 && input.length <= 3,
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: SHAPES,
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color:',
  },
];

inquirer.prompt(prompts).then((answers) => {
  generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
});
