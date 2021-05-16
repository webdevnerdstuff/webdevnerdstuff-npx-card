#!/usr/bin/env node
'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const clear = require('clear');
const fs = require('fs');
const path = require('path');

clear();

const res = fs.readFileSync(path.resolve(__dirname, 'data.json'));
const userData = JSON.parse(res);
const {
  username,
  email,
  title,
  npxCardHandle,
  github,
  patreon,
  webpage,
} = userData;

const data = {
  name: chalk.bold.hex('#00ff00')(`                  ${username}`),
  work: `${chalk.white(`${title}`)}`,
  email: `${chalk.white(`${email}`)}`,
  github: chalk.hex('#999')('https://github.com/') + chalk.hex('#2bb71d')(`${github}`),
  patreon: chalk.hex('#999')('https://patreon.com/') + chalk.hex('#f96854')(`${patreon}`),
  web: chalk.hex('#ffb46a')(`${webpage}`),
  npx: chalk.hex('#ff25d9')('npx') + ' ' + chalk.white(`${npxCardHandle}`),
};

const label = {
  work: chalk.white.bold('       Work:'),
  email: chalk.white.bold('      Email:'),
  github: chalk.white.bold('     GitHub:'),
  patreon: chalk.white.bold('    Patreon:'),
  web: chalk.white.bold('        Web:'),
  card: chalk.white.bold('       Card:'),
};

const bunny = `
                               ${chalk.red('_')}
                             ${chalk.red('_(_)_')}
                            ${chalk.red('(_)')}${chalk.white('@')}${chalk.red('(_)')}
                 ${chalk.white.bold('(\\/)')}        ${chalk.green('/')}${chalk.red('(_)')}
                 ${chalk.white.bold('(..)')}        ${chalk.green('|')}
               ${chalk.white.bold('*(\")(\")')}     ${chalk.green('\\\\|//')}
          ${chalk.green.bold('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')}
`;

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${label.work}  ${data.work}`,
    `${label.email}  ${data.email}`,
    ``,
    `${label.github}  ${data.github}`,
    `${label.patreon}  ${data.patreon}`,
    `${label.web}  ${data.web}`,
    ``,
    `${label.card}  ${data.npx}`,
    ``,
    `${chalk.italic('                  I make stuff!')}`,
    `${bunny}`,
  ]
    .join('\n'),
  {
    borderColor: '#2492ff',
    borderStyle: {
      topLeft: 'W',
      topRight: 'D',
      bottomLeft: 'N',
      bottomRight: 'S',
      horizontal: '·',
      vertical: ':'
    },
    float: 'left',
    margin: 1,
    padding: 1,
  }
);

console.log(me);
