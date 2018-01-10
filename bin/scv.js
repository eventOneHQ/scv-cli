#!/usr/bin/env node

const program = require('commander')
const clc = require('cli-color')
const scv = require('../index')
const pkgv = require('../package.json').version

program
  .version(pkgv)
  .option('-b, --buildnumber <buildnumber>', 'Build number to be set. ')
  .option('-n, --versionnumber <versionnumber>', 'Version number to be set.')
  .option('-c, --config <config>', 'Location of config.xml. Defaults to ./config.xml. e.g. /path/to/config.xml ')
  .parse(process.argv)

scv(program.config, program.versionnumber, program.buildnumber)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(clc.red(err))
  })
