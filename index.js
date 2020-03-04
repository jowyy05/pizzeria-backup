const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files.js');





const inquirer  = require('./lib/inquirer');

const run = async () => {
  const credentials = await inquirer.askCredentials();
  console.log(credentials);
};

run();
