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
  name: 'Kassandra Perch',
  handle: 'nodebotanist',
  work: 'Developer Advocacy Specialst',
  openSource: [
    'Tessel Open Source Committee',
    'Node.JS Hardware Working Group'
  ],
  twitter: 'nodebotanist',
  npm: 'nodebotanist',
  github: 'nodebotanist',
  linkedin: 'nodebotanist',
  web: 'https://nodebotani.st',
  card: 'nodebotanist'
}

const output = center([
  chalk.white.bright(`${data.name} / @${data.handle}`),

])

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, boxenOptions)))
