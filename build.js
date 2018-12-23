const fs = require('fs')
const path = require('path')

const chalk = require('chalk')
const boxen = require('boxen')
const center = require('center-align')

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const newLine = '\n'

const data = {
  name: 'Kas Perch',
  pronouns: 'they/them/their',
  handle: 'nodebotanist',
  work: 'Developer Advocacy (🥑) Specialist',
  openSource: [
    '🤖 Tessel Open Source Committee',
    '🤖 Node.JS Hardware Working Group'
  ],
  twitter: 'nodebotanist',
  npm: 'nodebotanist',
  github: 'nodebotanist',
  linkedin: 'nodebotanist',
  web: 'nodebotani.st',
  card: 'nodebotanist'
}

const output =
chalk.white.bold(`           🏳️‍🌈 ${data.name} / @${data.handle} 🏳️‍🌈`) + newLine +
chalk.white.bold(`           Pronouns: `) + chalk.green.bold(`✨ ` + data.pronouns + ` ✨`) + newLine + newLine + 
chalk.white.bold(`       Work 💼: `) + chalk.green(`${data.work}`) + newLine +
chalk.white.bold(`Open Source: `) + chalk.green(`${data.openSource.map(project => project).join(newLine + `             `)}`) + newLine +
chalk.blue.bold(`    Twitter 🐦: `) + chalk.gray(`https://twitter.com/`) + chalk.blue(data.twitter) + newLine +
chalk.red.bold(`        npm 📦: `) + chalk.gray(`https://npmjs.org/`) + chalk.red(data.npm) + newLine +
chalk.green.bold(`     GitHub 💻: `) + chalk.gray('https://github.com/') + chalk.green(data.github) + newLine +
chalk.magenta.bold(`     Twitch 📺: `) + chalk.gray('https://twitch.tv/') + chalk.magenta('nodebotanist') + newLine +
chalk.blue.bold(`   LinkedIn ⛓: `) + chalk.gray(`https://linkedin.com/@/`) + chalk.blue(data.linkedin) + newLine +
chalk.yellow.bold(`        Web 🌐: `) + chalk.gray(`https://`) + chalk.yellow(data.web) + newLine + newLine +
chalk.white.bold(`       Card 💳: `) + chalk.white(`npx ${data.card}`) + newLine

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, boxenOptions)))
