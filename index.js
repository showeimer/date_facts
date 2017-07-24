const moment = require('moment');
const chalk = require('chalk');

// FIRST
console.log("It is " + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:s a")));
// console.log("It is " + chalk.blue(moment().format("LLLL")));

// SECOND
console.log("It is " + chalk.red(moment().format("DDDo")) + " day of the year");

// THIRD
console.log("It is " + chalk.green(Math.round((moment() - moment().startOf('day')) / 1000)) + " seconds into the day");

// FOURTH
let dst = () => {
  if (moment().isDST()) {
    return 'It ' + chalk.yellow('is') + ' during Daylight Savings Time';
  } else {
    return 'It ' + chalk.yellow('is not') + ' during Daylight Savings Time';
  }
}
console.log(dst());

// FIFTH
let leapYear = () => {
  if (moment().isLeapYear()) {
    return'It ' + chalk.cyan('is') + ' a leap year';
  } else {
    return 'It ' + chalk.cyan('is not') + ' a leap year';
  }
}
console.log(leapYear());
