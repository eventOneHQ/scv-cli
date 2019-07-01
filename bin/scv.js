#!/usr/bin/env node

const program = require('commander')
const clc = require('cli-color')
const { scv } = require('../index')
const pkg = require('../package.json')

program
  .version(pkg.version)
  .option('-b, --buildnumber <buildnumber>', 'Build number to be set. ')
  .option('-n, --versionnumber <versionnumber>', 'Version number to be set.')
  .option('-c, --config <config>', 'Location of config.xml. Defaults to ./config.xml. e.g. /path/to/config.xml ')
  .parse(process.argv)

scv(program.versionnumber, program.buildnumber, program.config)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(clc.red(err))
  })
