#!/usr/bin/env node

const program = require('commander')
const clc = require('cli-color')

const { SCV } = require('../index')
const pkg = require('../package.json')

const scv = new SCV({
  showLogs: true
})

program
  .version(pkg.version)
  .option('-v, --semver <version>', 'Version number to be set.')
  .option('-b, --build <build>', 'Build number to be set. ')
  .option('-c, --config <config>', 'Location of config.xml (e.g. /path/to/config.xml). Defaults to ./config.xml.')
  .parse(process.argv)

scv.setVersion(program.semver, program.build, program.config)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(clc.red(err))
  })
